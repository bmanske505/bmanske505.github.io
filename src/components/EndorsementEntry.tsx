import React from "react";
import { Endorsement } from "../types";
import { PiEnvelopeOpenFill, PiUserDuotone } from "react-icons/pi";

const EndorsementEntry: React.FC<{ endorsement: Endorsement }> = ({ endorsement }) => {
	return (
		<div className="flex flex-col gap-8">
			<p>“{endorsement.description}”</p>
			<div className="ml-16 text-icon !gap-8">
				<a href={endorsement.email} target="_blank" className="text-interactable">
					<PiUserDuotone className="icon-closed secondary" size={60} title={endorsement.name} />
					<PiEnvelopeOpenFill className="icon-open accent" size={60} title={endorsement.name} />
				</a>
				<div>
					<p className="font-bold secondary">{endorsement.name}</p>
					<p className="text-sm">
						{endorsement.role}, {endorsement.company} <br />({endorsement.relation})
					</p>
				</div>
			</div>
		</div>
	);
};

export default EndorsementEntry;
