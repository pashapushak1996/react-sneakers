import ContentLoader from 'react-content-loader';

export const Loader = () => (
    <ContentLoader
        speed={2}
        width={220}
        height={255}
        viewBox="0 0 220 255"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="241" y="212" rx="8" ry="8" width="32" height="32"/>
        <rect x="0" y="165" rx="5" ry="5" width="170" height="15"/>
        <rect x="0" y="0" rx="5" ry="5" width="170" height="150"/>
        <rect x="139" y="221" rx="8" ry="8" width="32" height="32"/>
        <rect x="0" y="238" rx="4" ry="4" width="40" height="15"/>
        <rect x="0" y="222" rx="5" ry="5" width="36" height="12"/>
        <rect x="0" y="188" rx="5" ry="5" width="147" height="15"/>
    </ContentLoader>
);
