import animationData from '../Assets/Icons/quotefinal.json'
import Lottie from 'react-lottie'


export default function Logo() {

        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            }
          }
        
        return (
            <div>
                <Lottie
                    options={defaultOptions}
                    height={400}
                    width={400}
                />
            </div>
        )
}