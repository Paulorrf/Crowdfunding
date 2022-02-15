import React, {useState} from 'react'

import { BackersContainer, BackersContainerInner, BackerTitle, BackerSub, ProgressBarContainer, ProgressBar } from './Backers.elements'

import { Column } from '../util/util'

const Backers = () => {

    const [backed, setBacked] = useState('89,914');
    const [totalBackers, setTotalBackers] = useState('5,007');
    const [daysLeft, setDaysLeft] = useState(56);


    return (
        <BackersContainer>
            <BackersContainerInner>
                <div>
                    <BackerTitle>{backed} </BackerTitle>
                    <><BackerSub>of $100,000 backed</BackerSub> </>
                </div>

                <Column />

                <div>
                    <BackerTitle>{totalBackers} </BackerTitle>
                    <><BackerSub>total backers</BackerSub> </>
                </div>

                <Column />

                <div>
                    <BackerTitle>{daysLeft} </BackerTitle>
                    <><BackerSub>days left</BackerSub> </>
                </div>
            </BackersContainerInner>

            <ProgressBarContainer>
                <ProgressBar />
            </ProgressBarContainer>
        </BackersContainer>
    )
}

export default Backers
