import { ButtonSearchbar, FormSearchbar, HeaderSearchbar, InputSearchbar } from "./Searchbar.styled"

export const Searchbar = ({onSubmit, handleInput}) => {
    return (
        <HeaderSearchbar>
            <FormSearchbar onSubmit={onSubmit}>
                <InputSearchbar
                    onChange={handleInput}
                    name='searchQuery'
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
                <ButtonSearchbar type="submit" className="button">
                    Search
                </ButtonSearchbar>
            </FormSearchbar>
        </HeaderSearchbar>
    )
}