import { FormEvent, useState } from 'react'
import {
    TextField,
    ImageUploader,
    Dropdown,
    KeySelector,
    CheckBox,
} from '../../components/KaraokeFormComponents'
import {
    FormError,
    KaraokeFormWrapper,
    StyledForm,
    SubmitButton,
} from './KaraokeForm.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

const KaraokeForm = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)

        const formData = new FormData(e.currentTarget)
        const name = (formData.get('name') as string) || ''
        const file = formData.get('file') as File
        const key = ((formData.get('key') as string) || '').trim()
        const box = formData.get('box') ? true : false

        const songIndex = parseInt(formData.get('song') as string, 10)
        const song = mockSongs[songIndex] ? mockSongs[songIndex].item : null

        if (!validate(name, song, key, box)) {
            setIsLoading(false)
            return
        }

        setErrorMsg('')

        // Mimics network request to show the loading animation
        setTimeout(() => {
            alert(
                `Nimi: ${name} \nBiisi: ${song}\nSävellaji: ${key}\nKasvokuva: ${file ? file.name : 'N/A'}`
            )
            window.location.reload()
        }, 1000)
    }

    const validate = (
        name: string,
        song: string | null,
        key: string,
        box: boolean
    ) => {
        if (name.trim() === '') {
            setErrorMsg('Anna nimi')
            return false
        }
        if (!song) {
            setErrorMsg('Valitse biisi')
            return false
        }

        if (key.trim() === '') {
            setErrorMsg('Valitse sävellaji')
            return false
        }
        if (!box) {
            setErrorMsg(
                'Sinun täytyy sallia tietojesi tallennus karaokejärjestelmään'
            )
            return false
        }
        return true
    }

    const mockSongs: { id: number; item: string }[] = [
        { id: 0, item: 'Whitney Houston - I Will Always Love You' },
        { id: 1, item: "Journey - Don't Stop Believin'" },
        { id: 2, item: 'Queen - Bohemian Rhapsody' },
        { id: 3, item: "Bon Jovi - Livin' on a Prayer" },
        { id: 4, item: 'ABBA - Dancing Queen' },
    ]

    return (
        <KaraokeFormWrapper>
            <h4>Ilmoittautumislomake</h4>
            <StyledForm onSubmit={handleSubmit}>
                <TextField label="Nimi tai nimimerkki*" name="name" />
                <ImageUploader label="Kasvokuva" name="file" />
                <Dropdown label="Biisi*" name="song" items={mockSongs} />
                <KeySelector label="Sävellaji*" name="key" />
                <CheckBox
                    label="Sallin tietojeni tallennuksen karaokejärjestelmään"
                    name="box"
                />
                {errorMsg && <FormError>{errorMsg}</FormError>}
                <SubmitButton type="submit" disabled={isLoading}>
                    {isLoading ? (
                        <FontAwesomeIcon icon={faCircleNotch} spin />
                    ) : (
                        'Ilmoittaudu'
                    )}
                </SubmitButton>
            </StyledForm>
        </KaraokeFormWrapper>
    )
}

export default KaraokeForm
