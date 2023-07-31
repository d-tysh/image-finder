import { ButtonSearchbar, FormSearchbar, HeaderSearchbar, InputSearchbar } from "./Searchbar.styled"
import { BsSearch } from 'react-icons/bs';

export const Searchbar = ({onSubmit, handleInput}) => {

    return (
        <HeaderSearchbar>
            <FormSearchbar onSubmit={onSubmit}>
                <ButtonSearchbar type="submit" className="button">
                    <BsSearch />
                </ButtonSearchbar>

                <InputSearchbar
                    onChange={handleInput}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </FormSearchbar>
        </HeaderSearchbar>
    )
}