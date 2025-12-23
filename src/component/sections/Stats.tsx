const Stats = () => {
    return (
        <section className="relative z-10 py-12 border-y border-white/5 bg-zinc-950/30 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6 text-center">
                {[
                    { label: "Horoscopes Served", value: "10M+" },
                    { label: "Tarot Readings", value: "500k" },
                    { label: "Team Members", value: "42" },
                    { label: "Offices", value: "Remote First" },
                ].map((stat, i) => (
                    <div key={i}>
                        <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-sm text-amber-300 font-medium uppercase tracking-wider">{stat.label}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Stats;
