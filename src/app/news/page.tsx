"use client";

import { useGrowwNews } from "@/hooks/useStocks";
import { ExternalLink, Newspaper, TrendingUp, Zap } from "lucide-react";

export default function NewsPage() {
    const { data: news, isLoading, error } = useGrowwNews();

    console.log("Current News Data:", news);
    if (error) console.error("News Error:", error);

    return (
        <div className="container mx-auto px-4 py-8 space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">Market News & Insights</h1>
                <p className="text-muted-foreground">Aggregated real-time updates from Groww and Yahoo Finance.</p>
            </div>

            {isLoading ? (
                <div className="flex h-64 items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
            ) : (!news || news.length === 0) ? (
                <div className="flex flex-col items-center justify-center h-64 text-center space-y-4">
                    <p className="text-lg text-muted-foreground">No news articles found at the moment.</p>
                    <p className="text-sm text-muted-foreground/50">Try refreshing in a few seconds.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {news?.map((item: any, idx: number) => (
                        <NewsCard key={item.uuid || idx} item={item} />
                    ))}
                </div>
            )}
        </div>
    );
}

function NewsCard({ item }: { item: any }) {
    const isGroww = item.source_label === "Groww Digest";

    return (
        <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all duration-300 h-full"
        >
            {/* Image (if available, mostly user doesn't render it in yf but if thumb exists) */}
            {item.thumbnail?.resolutions?.[0]?.url && (
                <div className="h-48 w-full overflow-hidden bg-muted">
                    <img
                        src={item.thumbnail.resolutions[0].url}
                        alt="News thumbnail"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                </div>
            )}

            <div className="p-5 flex flex-col flex-grow space-y-4">
                <div className="flex items-center justify-between">
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${isGroww ? "bg-green-500/10 text-green-600" : "bg-purple-500/10 text-purple-600"}`}>
                        {item.source_label}
                    </span>
                    <span className="text-xs text-muted-foreground">
                        {new Date((item.providerPublishTime || 0) * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                </div>

                <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors line-clamp-3">
                    {item.title}
                </h3>

                <div className="mt-auto pt-4 flex items-center justify-between text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                        <Newspaper className="w-4 h-4" />
                        {item.publisher}
                    </span>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
            </div>
        </a>
    );
}
