import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Lotusrevenue - Realstate by Fractions DAO"}
                </title>
            </Head>
        </>
    )
}

export default PageHead