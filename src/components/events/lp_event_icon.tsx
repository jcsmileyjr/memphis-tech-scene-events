import { BugPlay } from 'lucide-react';
import { Sandwich } from 'lucide-react';
import { Bot } from 'lucide-react';

type EventIconProp = {
    iconName: string;
}
const LP_Event_Icon = ({iconName}: EventIconProp) => {
    return (
        <div className=''>
            {
                iconName === "sandwich" ? <Sandwich size={48} /> : 
                iconName === "bot" ? <Bot size={48} /> : 
                <BugPlay size={48} />
            }
        </div>
    )
}

export default LP_Event_Icon;