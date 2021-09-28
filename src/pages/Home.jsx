import { CardList, Search, Title } from '../components';

export const Home = (props) => {
    const {
        searchValue,
        setSearchValue,
    } = props;

    return (
        <div className='p-40'>
            <div className='d-flex justify-between align-center mb-40'>
                <Title searchValue={searchValue} pageTitle={'Все кросовки'}/>
                <Search searchValue={searchValue}
                        setSearchValue={setSearchValue}/>
            </div>
            <div className="content">
                <CardList {...props}/>
            </div>
        </div>
    );
};
