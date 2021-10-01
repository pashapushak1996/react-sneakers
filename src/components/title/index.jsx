export const Title = (props) => {
    const { searchValue, pageTitle } = props;
    return (<>
        { searchValue ? <h1>Шукаємо { searchValue }</h1> : <h1>{ pageTitle }</h1> }</>);
};
