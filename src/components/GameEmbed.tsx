interface GameEmbedProps {
	title: string;
	src: string;
}

export default function GameEmbed({ title, src }: GameEmbedProps) {
	return (
		<div className="aspect-video w-full overflow-hidden border">
			<iframe className="size-full" src={src} allowFullScreen loading="lazy" title={title} />
		</div>
	);
}
