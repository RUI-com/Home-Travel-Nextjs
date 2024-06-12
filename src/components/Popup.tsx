
import { GrFormClose } from "react-icons/gr";
export const Popup = () => {
  return (
    <div className="islands__popup" id="popup">
                        <div>
                            <div className="islands__popup-close" id="popup-close">
                                <i className='bx bx-x'><GrFormClose /></i>
                            </div>
            
                            <iframe className="islands__popup-video" src="https://www.youtube.com/embed/JrU6bsuNU7Y" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                        </div>
                    </div>
  )
}
