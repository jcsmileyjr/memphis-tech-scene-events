interface LpSponorProps {
    organization: string;
    description: string;
}

const LpSponor = ({ organization, description }: LpSponorProps) => {
    return (
        <div className="text-base xl:text-xl">
            <span className="font-bold underline">{organization}</span>:{" "}
            {description}
        </div>
    );
};

export default LpSponor;
