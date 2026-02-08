const CodeSnippet = () => {
    return (
        <div className="font-mono text-sm relative overflow-hidden rounded-xl bg-[#0b1120] border border-white/10 shadow-2xl">
            {/* Header / Traffic Lights */}
            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <div className="ml-auto text-xs text-gray-500">AkashDeveloper.dart</div>
            </div>

            {/* Code Content */}
            <div className="p-6 overflow-x-auto">
                <div className="grid grid-cols-[auto,1fr] gap-4">
                    {/* Line Numbers */}
                    <div className="text-gray-600 text-right select-none space-y-1">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                        <div>6</div>
                        <div>7</div>
                        <div>8</div>
                        <div>9</div>
                    </div>

                    {/* Code */}
                    <div className="space-y-1 whitespace-pre">
                        <div>
                            <span className="text-purple-400">class</span>{" "}
                            <span className="text-yellow-100">AkashDeveloper</span>{" "}
                            <span className="text-gray-300">{"{"}</span>
                        </div>

                        <div className="pl-4">
                            <span className="text-purple-400">String</span>{" "}
                            <span className="text-blue-300">specialty</span>{" "}
                            <span className="text-gray-300">=</span>{" "}
                            <span className="text-green-400">'Flutter'</span>;
                        </div>

                        <div className="pl-4">
                            <span className="text-purple-400">int</span>{" "}
                            <span className="text-blue-300">experience</span>{" "}
                            <span className="text-gray-300">=</span>{" "}
                            <span className="text-orange-400">2</span>;
                        </div>

                        <div>&nbsp;</div>

                        <div className="pl-4">
                            <span className="text-purple-400">List</span>
                            <span className="text-gray-300">&lt;</span>
                            <span className="text-purple-400">String</span>
                            <span className="text-gray-300">&gt;</span>{" "}
                            <span className="text-blue-300">skills</span>{" "}
                            <span className="text-gray-300">=</span>{" "}
                            <span className="text-gray-300">[</span>
                        </div>

                        <div className="pl-8">
                            <span className="text-green-400">'Firebase'</span>,{" "}
                            <span className="text-green-400">'Node.js'</span>,{" "}
                            <span className="text-green-400">'Rest API'</span>
                        </div>

                        <div className="pl-4">
                            <span className="text-gray-300">];</span>
                        </div>

                        <div>
                            <span className="text-gray-300">{"}"}</span>
                        </div>
                    </div>
                </div>

                {/* Status Bar */}
                <div className="mt-6 pt-4 border-t border-white/5">
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">Currently Building</div>
                    <div className="text-sm text-gray-300 font-medium">Scalable E-commerce Ecosystem</div>
                </div>
            </div>
        </div>
    );
};

export default CodeSnippet;
