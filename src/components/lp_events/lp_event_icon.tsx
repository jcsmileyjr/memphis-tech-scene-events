import { BugPlay } from "lucide-react";
import { Sandwich } from "lucide-react";
import { Bot } from "lucide-react";

type EventIconProp = {
    iconName: string;
};
const LP_Event_Icon = ({ iconName }: EventIconProp) => {
    return (
        <div className="">
            {iconName === "sandwich" ? (
                <Sandwich color="orange" className="w-8 h-8" />
            ) : iconName === "bot" ? (
                <Bot color="blue" className="w-8 h-8" />
            ) : (
                <BugPlay color="green" className="w-8 h-8" />
            )}
        </div>
    );
};

export default LP_Event_Icon;
