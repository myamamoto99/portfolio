import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { gridStyles } from "@/styles";
import { bakingItems } from "@/data/baking";
import BakingCard from "@/components/bakingCard";
import { Baking } from "@/types/baking";
import { resolveBasePathImage } from "@/utils/imagePath";
import BakingImage from "@/components/bakingImage";

export default function BakingPage() {
        const { basePath } = useRouter();
        const [selectedItem, setSelectedItem] = useState<Baking | null>(null);
        const isOverlayOpen = Boolean(selectedItem);
        const resolvedSelectedImage = useMemo(() => resolveBasePathImage(basePath, selectedItem?.imageUrl), [selectedItem, basePath]);

        useEffect(() => {
            if (!isOverlayOpen) {
                return;
            }

            const onKeyDown = (event: KeyboardEvent) => {
                if (event.key === "Escape") {
                    setSelectedItem(null);
                }
            };

            const previousOverflow = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", onKeyDown);

            return () => {
                window.removeEventListener("keydown", onKeyDown);
                document.body.style.overflow = previousOverflow;
            };
        }, [isOverlayOpen]);

    return (
            <>
                <section className={gridStyles.bakingGrid}>
                    {bakingItems.map((item) => (
                        <BakingCard
                            key={`${item.title}-${item.date}-${item.imageUrl}`}
                            title={item.title}
                            date={item.date}
                            imageUrl={item.imageUrl}
                            onOpen={() => setSelectedItem(item)}
                        />
                    ))}
                </section>

                {selectedItem && resolvedSelectedImage && (
                    <BakingImage
                        title={selectedItem.title}
                        date={selectedItem.date}
                        imageUrl={resolvedSelectedImage}
                        onClose={() => setSelectedItem(null)}
                    />
                )}
            </>
    )
}