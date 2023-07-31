import { Oval } from 'react-loader-spinner'

export const Loader = () => {
    return (
        <Oval
            height={40}
            width={40}
            color="#4fa94d"
            wrapperStyle={{ 'justifyContent': 'center', 'margin': '20px 0' }}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
    )
}