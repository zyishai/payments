/// <reference types="next" />
/// <reference types="next/types/global" />
interface StatelessPage<P = {}> extends React.SFC<P> {
    getInitialProps?: (ctx?: any) => Promise<P>
}