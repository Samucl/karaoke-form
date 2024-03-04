import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { KaraokeForm } from '..'

describe('KaraokeForm Component', () => {
    beforeEach(() => {
        render(<KaraokeForm />)
    })

    it('renders correctly', () => {
        expect(screen.getByText('Ilmoittautumislomake')).toBeInTheDocument()
        expect(screen.getByText('Nimi tai nimimerkki*')).toBeInTheDocument()
        expect(screen.getByText('Kasvokuva')).toBeInTheDocument()
        expect(screen.getByText('Biisi*')).toBeInTheDocument()
        expect(screen.getByText('Sävellaji*')).toBeInTheDocument()
        expect(
            screen.getByText(
                'Sallin tietojeni tallennuksen karaokejärjestelmään'
            )
        ).toBeInTheDocument()
        expect(
            screen.getByRole('button', { name: 'Ilmoittaudu' })
        ).toBeEnabled()
    })

    it('shows an error message if the submit button is clicked with empty required fields', async () => {
        userEvent.click(screen.getByRole('button', { name: 'Ilmoittaudu' }))
        await waitFor(() => {
            expect(screen.getByText('Anna nimi')).toBeInTheDocument()
            expect(
                screen.getByRole('button', { name: 'Ilmoittaudu' })
            ).toBeEnabled()
        })
    })

    it('matches the snapshot', () => {
        const { asFragment } = render(<KaraokeForm />)
        expect(asFragment()).toMatchSnapshot()
    })
})
