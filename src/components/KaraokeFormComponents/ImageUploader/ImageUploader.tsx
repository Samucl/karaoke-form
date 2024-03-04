import { FC, useState, useRef } from 'react'
import { ImageUploaderProps } from './ImageUploader.types'
import {
    FileWrapper,
    ImageLabel,
    ImageUploaderWrapper,
    InputWrapper,
    RemoveButton,
    StyledIcon,
    StyledImage,
    StyledInput,
    StyledLabel,
} from './ImageUploader.styles'
import { Description } from '..'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'

const ImageUploader: FC<ImageUploaderProps> = ({ label, name }) => {
    const [fileName, setFileName] = useState('')
    const [imagePreviewUrl, setImagePreviewUrl] = useState('')
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null
        if (file) {
            setFileName(file.name)
            const fileUrl = URL.createObjectURL(file)
            setImagePreviewUrl(fileUrl)
        } else {
            clearFile();
        }
    }

    const clearFile = () => {
        setFileName('')
        setImagePreviewUrl('')
        if (fileInputRef.current) {
            fileInputRef.current.value = ''
        }
    }

    return (
        <ImageUploaderWrapper>
            <Description label={label} />
            <InputWrapper>
                <StyledInput
                    type="file"
                    name={name}
                    id="file"
                    onChange={handleChange}
                    ref={fileInputRef}
                    accept="image/*"
                />
                {imagePreviewUrl ? (
                    <ImageLabel htmlFor="file">
                        <StyledImage src={imagePreviewUrl} alt="Preview" />
                    </ImageLabel>
                ) : (
                    <StyledLabel htmlFor="file">+ Tuo kasvokuva</StyledLabel>
                )}
            </InputWrapper>
            {fileName && (
                <FileWrapper>
                    <RemoveButton onClick={clearFile}>
                        <StyledIcon icon={faWindowClose} />
                    </RemoveButton>
                    <span>{fileName}</span>
                </FileWrapper>
            )}
        </ImageUploaderWrapper>
    )
}

export default ImageUploader
