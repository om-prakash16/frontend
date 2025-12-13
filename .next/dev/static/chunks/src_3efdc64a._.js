(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/hooks/useStocks.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGainers3Day",
    ()=>useGainers3Day,
    "useGrowwStrength",
    ()=>useGrowwStrength,
    "useLosers3Day",
    ()=>useLosers3Day,
    "useStockDetail",
    ()=>useStockDetail,
    "useStocks",
    ()=>useStocks,
    "useStrengthAnalysis",
    ()=>useStrengthAnalysis,
    "useToggleWatchlist",
    ()=>useToggleWatchlist,
    "useWatchlist",
    ()=>useWatchlist
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature();
;
;
const API_URL = "http://localhost:8000/api/v1";
function useStocks(filters) {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "stocks",
            "fno",
            filters
        ],
        queryFn: {
            "useStocks.useQuery": async ()=>{
                const params = new URLSearchParams();
                Object.entries(filters).forEach({
                    "useStocks.useQuery": ([key, value])=>{
                        if (value !== undefined && value !== null && value !== "") {
                            params.append(key, String(value));
                        }
                    }
                }["useStocks.useQuery"]);
                const url = `${API_URL}/stocks/fno`;
                const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(url, {
                    params
                });
                return data;
            }
        }["useStocks.useQuery"],
        refetchInterval: 3000,
        staleTime: 10000
    });
}
_s(useStocks, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useStockDetail(symbol) {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "stock",
            symbol
        ],
        queryFn: {
            "useStockDetail.useQuery": async ()=>{
                if (!symbol) return null;
                const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${API_URL}/stocks/${symbol}`);
                return data;
            }
        }["useStockDetail.useQuery"],
        enabled: !!symbol,
        refetchInterval: 15000
    });
}
_s1(useStockDetail, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useWatchlist() {
    _s2();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "watchlist"
        ],
        queryFn: {
            "useWatchlist.useQuery": async ()=>{
                const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${API_URL}/watchlist`);
                return data;
            }
        }["useWatchlist.useQuery"],
        refetchInterval: 5000
    });
}
_s2(useWatchlist, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useToggleWatchlist() {
    _s3();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useToggleWatchlist.useMutation": async ({ symbol, action })=>{
                const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${API_URL}/watchlist/`, {
                    symbol,
                    action
                });
                return data;
            }
        }["useToggleWatchlist.useMutation"],
        onSuccess: {
            "useToggleWatchlist.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "watchlist"
                    ]
                });
            }
        }["useToggleWatchlist.useMutation"]
    });
}
_s3(useToggleWatchlist, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useGainers3Day() {
    _s4();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "stocks",
            "gainers-3day"
        ],
        queryFn: {
            "useGainers3Day.useQuery": async ()=>{
                const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${API_URL}/stocks/gainers-3day`);
                return data;
            }
        }["useGainers3Day.useQuery"],
        refetchInterval: 15000
    });
}
_s4(useGainers3Day, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useLosers3Day() {
    _s5();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "stocks",
            "losers-3day"
        ],
        queryFn: {
            "useLosers3Day.useQuery": async ()=>{
                const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${API_URL}/stocks/losers-3day`);
                return data;
            }
        }["useLosers3Day.useQuery"],
        refetchInterval: 15000
    });
}
_s5(useLosers3Day, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useStrengthAnalysis(filters) {
    _s6();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "strength-analysis",
            filters
        ],
        queryFn: {
            "useStrengthAnalysis.useQuery": async ()=>{
                const params = new URLSearchParams();
                Object.entries(filters).forEach({
                    "useStrengthAnalysis.useQuery": ([key, value])=>{
                        if (value !== undefined && value !== null && value !== "") {
                            params.append(key, String(value));
                        }
                    }
                }["useStrengthAnalysis.useQuery"]);
                const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${API_URL}/stocks/strength-analyzer`, {
                    params
                });
                return data;
            }
        }["useStrengthAnalysis.useQuery"],
        refetchInterval: 15000
    });
}
_s6(useStrengthAnalysis, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useGrowwStrength(filters) {
    _s7();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "groww-strength",
            filters
        ],
        queryFn: {
            "useGrowwStrength.useQuery": async ()=>{
                const params = new URLSearchParams();
                Object.entries(filters).forEach({
                    "useGrowwStrength.useQuery": ([key, value])=>{
                        if (value !== undefined && value !== null && value !== "") {
                            params.append(key, String(value));
                        }
                    }
                }["useGrowwStrength.useQuery"]);
                const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${API_URL}/groww/strength`, {
                    params
                });
                return data;
            }
        }["useGrowwStrength.useQuery"],
        refetchInterval: 15000
    });
}
_s7(useGrowwStrength, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/AutoFilter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AutoFilter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down.js [app-client] (ecmascript) <export default as ArrowDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-client] (ecmascript) <export default as ArrowUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function AutoFilter({ columnKey, type, options = [], onFilter, currentFilter, onSort, sortDirection, title }) {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Local state for filter inputs
    const [localSelected, setLocalSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(currentFilter?.selectedValues || options);
    const [localMin, setLocalMin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(currentFilter?.min?.toString() || "");
    const [localMax, setLocalMax] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(currentFilter?.max?.toString() || "");
    const filteredOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AutoFilter.useMemo[filteredOptions]": ()=>{
            if (!search) return options;
            return options.filter({
                "AutoFilter.useMemo[filteredOptions]": (opt)=>opt.toLowerCase().includes(search.toLowerCase())
            }["AutoFilter.useMemo[filteredOptions]"]);
        }
    }["AutoFilter.useMemo[filteredOptions]"], [
        options,
        search
    ]);
    const handleApply = ()=>{
        if (type === "number") {
            const min = localMin ? parseFloat(localMin) : undefined;
            const max = localMax ? parseFloat(localMax) : undefined;
            if (min === undefined && max === undefined) {
                onFilter(null);
            } else {
                onFilter({
                    type,
                    min,
                    max
                });
            }
        } else {
            if (localSelected.length === options.length) {
                onFilter(null); // All selected = no filter
            } else {
                onFilter({
                    type,
                    selectedValues: localSelected
                });
            }
        }
        setIsOpen(false);
    };
    const handleClear = ()=>{
        setLocalSelected(options);
        setLocalMin("");
        setLocalMax("");
        onFilter(null);
        setIsOpen(false);
    };
    const toggleOption = (opt)=>{
        setLocalSelected((prev)=>prev.includes(opt) ? prev.filter((p)=>p !== opt) : [
                ...prev,
                opt
            ]);
    };
    const toggleAll = ()=>{
        if (localSelected.length === filteredOptions.length) {
            setLocalSelected([]);
        } else {
            setLocalSelected(filteredOptions);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative inline-block",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: (e)=>{
                    e.stopPropagation();
                    setIsOpen(!isOpen);
                },
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-1 rounded hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors", currentFilter || sortDirection ? "text-blue-600 dark:text-blue-400" : "text-gray-400 dark:text-gray-500"),
                title: `Filter ${title}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                    className: "w-3 h-3"
                }, void 0, false, {
                    fileName: "[project]/src/components/AutoFilter.tsx",
                    lineNumber: 112,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/AutoFilter.tsx",
                lineNumber: 101,
                columnNumber: 13
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 z-40",
                        onClick: (e)=>{
                            e.stopPropagation();
                            setIsOpen(false);
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/AutoFilter.tsx",
                        lineNumber: 117,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-full right-0 mt-2 w-64 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg shadow-xl z-50 flex flex-col max-h-[400px]",
                        onClick: (e)=>e.stopPropagation(),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 border-b border-gray-200 dark:border-slate-700 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-gray-900 dark:text-white text-sm",
                                        children: [
                                            "Filter: ",
                                            title
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AutoFilter.tsx",
                                        lineNumber: 130,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsOpen(false),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AutoFilter.tsx",
                                            lineNumber: 132,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AutoFilter.tsx",
                                        lineNumber: 131,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AutoFilter.tsx",
                                lineNumber: 129,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2 border-b border-gray-200 dark:border-slate-700 flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            onSort("asc");
                                            setIsOpen(false);
                                        },
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 flex items-center justify-center gap-1 px-2 py-1.5 rounded text-xs font-medium transition-colors", sortDirection === "asc" ? "bg-blue-600 text-white" : "bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AutoFilter.tsx",
                                                lineNumber: 150,
                                                columnNumber: 33
                                            }, this),
                                            " Asc"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AutoFilter.tsx",
                                        lineNumber: 138,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            onSort("desc");
                                            setIsOpen(false);
                                        },
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 flex items-center justify-center gap-1 px-2 py-1.5 rounded text-xs font-medium transition-colors", sortDirection === "desc" ? "bg-blue-600 text-white" : "bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AutoFilter.tsx",
                                                lineNumber: 164,
                                                columnNumber: 33
                                            }, this),
                                            " Desc"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AutoFilter.tsx",
                                        lineNumber: 152,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AutoFilter.tsx",
                                lineNumber: 137,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 flex-1 overflow-y-auto min-h-0",
                                children: type === "number" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs text-gray-500 dark:text-gray-400 mb-1",
                                                    children: "Min Value"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AutoFilter.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    value: localMin,
                                                    onChange: (e)=>setLocalMin(e.target.value),
                                                    className: "w-full bg-gray-50 dark:bg-slate-900 border border-gray-300 dark:border-slate-600 rounded px-2 py-1 text-sm text-gray-900 dark:text-white focus:border-blue-500 outline-none",
                                                    placeholder: "Min"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AutoFilter.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AutoFilter.tsx",
                                            lineNumber: 172,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs text-gray-500 dark:text-gray-400 mb-1",
                                                    children: "Max Value"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AutoFilter.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    value: localMax,
                                                    onChange: (e)=>setLocalMax(e.target.value),
                                                    className: "w-full bg-gray-50 dark:bg-slate-900 border border-gray-300 dark:border-slate-600 rounded px-2 py-1 text-sm text-gray-900 dark:text-white focus:border-blue-500 outline-none",
                                                    placeholder: "Max"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AutoFilter.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AutoFilter.tsx",
                                            lineNumber: 182,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AutoFilter.tsx",
                                    lineNumber: 171,
                                    columnNumber: 33
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col h-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                    className: "w-3 h-3 absolute left-2 top-2 text-gray-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AutoFilter.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: search,
                                                    onChange: (e)=>setSearch(e.target.value),
                                                    className: "w-full bg-gray-50 dark:bg-slate-900 border border-gray-300 dark:border-slate-600 rounded pl-7 pr-2 py-1 text-xs text-gray-900 dark:text-white focus:border-blue-500 outline-none",
                                                    placeholder: "Search..."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AutoFilter.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AutoFilter.tsx",
                                            lineNumber: 195,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-2 pb-2 border-b border-gray-200 dark:border-slate-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: localSelected.length === filteredOptions.length && filteredOptions.length > 0,
                                                    onChange: toggleAll,
                                                    className: "rounded bg-gray-200 dark:bg-slate-700 border-gray-300 dark:border-slate-600 text-blue-600 focus:ring-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AutoFilter.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-gray-600 dark:text-gray-300",
                                                    children: "(Select All)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AutoFilter.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AutoFilter.tsx",
                                            lineNumber: 205,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1 overflow-y-auto max-h-[200px]",
                                            children: filteredOptions.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "flex items-center gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-700/50 p-1 rounded",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            checked: localSelected.includes(opt),
                                                            onChange: ()=>toggleOption(opt),
                                                            className: "rounded bg-gray-200 dark:bg-slate-700 border-gray-300 dark:border-slate-600 text-blue-600 focus:ring-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AutoFilter.tsx",
                                                            lineNumber: 217,
                                                            columnNumber: 49
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-gray-700 dark:text-gray-300 break-all",
                                                            children: opt
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AutoFilter.tsx",
                                                            lineNumber: 223,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, opt, true, {
                                                    fileName: "[project]/src/components/AutoFilter.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 45
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AutoFilter.tsx",
                                            lineNumber: 214,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AutoFilter.tsx",
                                    lineNumber: 194,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/AutoFilter.tsx",
                                lineNumber: 169,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 border-t border-gray-200 dark:border-slate-700 flex justify-between gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleClear,
                                        className: "px-3 py-1.5 text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors",
                                        children: "Clear"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AutoFilter.tsx",
                                        lineNumber: 233,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleApply,
                                        className: "px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-medium transition-colors",
                                        children: "Apply"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AutoFilter.tsx",
                                        lineNumber: 239,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AutoFilter.tsx",
                                lineNumber: 232,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AutoFilter.tsx",
                        lineNumber: 124,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AutoFilter.tsx",
        lineNumber: 100,
        columnNumber: 9
    }, this);
}
_s(AutoFilter, "5kjgtBOWp75bmDoPXe8tU2+EOe8=");
_c = AutoFilter;
var _c;
__turbopack_context__.k.register(_c, "AutoFilter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/globalFilter.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyColumnFilters",
    ()=>applyColumnFilters,
    "enrichStockData",
    ()=>enrichStockData,
    "globalFilter",
    ()=>globalFilter
]);
const enrichStockData = (data)=>{
    return data.map((stock)=>{
        // Avoid re-enriching if already done (check if derived exists and has keys)
        if (stock.derived && stock.derived.indicatorsList) return stock;
        // 3D Average Strength Logic
        let strength3D = "Neutral";
        if (stock.history.avg_3day > 0.5) strength3D = "Strong Buyers";
        else if (stock.history.avg_3day < -0.5) strength3D = "Strong Sellers";
        // Indicators Composite
        const indicatorsList = [];
        if (stock.indicators.macd_status === "above") indicatorsList.push("MACD Above");
        if (stock.indicators.macd_status === "below") indicatorsList.push("MACD Below");
        if (stock.indicators.macd_status === "neutral") indicatorsList.push("MACD Neutral");
        if (stock.indicators.rsi_zone === "overbought") indicatorsList.push("RSI Over");
        if (stock.indicators.rsi_zone === "oversold") indicatorsList.push("RSI Under");
        if (stock.indicators.rsi_zone === "neutral") indicatorsList.push("RSI Neutral");
        return {
            ...stock,
            derived: {
                strength3D,
                indicatorsList,
                macdLabel: stock.indicators.macd_status === "above" ? "Above" : stock.indicators.macd_status === "below" ? "Below" : "Neutral",
                rsiLabel: stock.indicators.rsi_zone === "overbought" ? "Over" : stock.indicators.rsi_zone === "oversold" ? "Under" : "Neutral",
                strengthLabel: stock.indicators.strength_label === "buyers" ? "Buyers Dominating" : stock.indicators.strength_label === "sellers" ? "Sellers Dominating" : "Balanced"
            }
        };
    });
};
const globalFilter = (data, filters)=>{
    if (!data || !filters) return data || [];
    // Data should be enriched before passing here, but we can access properties safely
    return data.filter((stock)=>{
        // Handle "Quick Filters" (boolean flags from FilterDrawer)
        if (filters.search) {
            const searchLower = filters.search.toLowerCase();
            if (!stock.symbol.toLowerCase().includes(searchLower) && !stock.name?.toLowerCase().includes(searchLower)) return false;
        }
        if (filters.sector && stock.sector !== filters.sector) return false;
        if (filters.min_price && stock.current_price < Number(filters.min_price)) return false;
        if (filters.max_price && stock.current_price > Number(filters.max_price)) return false;
        if (filters.min_avg_3day_pct && stock.history.avg_3day < Number(filters.min_avg_3day_pct)) return false;
        if (filters.max_avg_3day_pct && stock.history.avg_3day > Number(filters.max_avg_3day_pct)) return false;
        if (filters.constant_only && !stock.flags.is_constant_price) return false;
        if (filters.gainers_only && stock.current_change <= 0) return false;
        if (filters.losers_only && stock.current_change >= 0) return false;
        if (filters.high_volume_only && !stock.flags.is_high_volume) return false;
        if (filters.macd_status && stock.indicators.macd_status !== filters.macd_status) return false;
        if (filters.rsi_zone && stock.indicators.rsi_zone !== filters.rsi_zone) return false; // Fixed: rsi_zone property
        if (filters.strength && stock.indicators.strength_label !== filters.strength) return false;
        return true;
    });
};
const applyColumnFilters = (data, columnFilters)=>{
    return data.filter((item)=>{
        return Object.entries(columnFilters).every(([key, filter])=>{
            let value;
            // Map keys to values (using dot notation support)
            value = key.split('.').reduce((o, i)=>o?.[i], item);
            if (filter.type === "number") {
                if (typeof value !== "number") return false;
                if (filter.min !== undefined && value < filter.min) return false;
                if (filter.max !== undefined && value > filter.max) return false;
                return true;
            } else {
                // Text/Enum
                if (!filter.selectedValues || filter.selectedValues.length === 0) return true;
                // Handle Array values (if cell contains multiple items)
                if (Array.isArray(value)) {
                    return value.some((v)=>filter.selectedValues?.some((f)=>String(v).toUpperCase() === f.toUpperCase()));
                }
                // Standard String Value
                const cellValue = String(value).toUpperCase();
                return filter.selectedValues.some((f)=>cellValue.includes(f.toUpperCase()));
            }
        });
    });
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/tableUtils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPctColor",
    ()=>getPctColor,
    "getUniqueValues",
    ()=>getUniqueValues
]);
const getUniqueValues = (data, key)=>{
    const values = new Set();
    data.forEach((item)=>{
        const val = key.split('.').reduce((o, i)=>o?.[i], item);
        if (val) values.add(String(val));
    });
    return Array.from(values).sort();
};
const getPctColor = (val)=>{
    if (val > 0) return "text-green-600 dark:text-green-400";
    if (val < 0) return "text-red-600 dark:text-red-400";
    return "text-gray-400 dark:text-gray-500";
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/StrengthMeter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StrengthMeter",
    ()=>StrengthMeter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function StrengthMeter({ label, buyerScore, sellerScore }) {
    // If scores are provided, use them for the ratio
    // If not, infer 100% based on label
    let bScore = buyerScore;
    let sScore = sellerScore;
    if (bScore === undefined || sScore === undefined) {
        if (label === "Buyers Dominating" || label === "Buyers") {
            bScore = 100;
            sScore = 0;
        } else if (label === "Sellers Dominating" || label === "Sellers") {
            bScore = 0;
            sScore = 100;
        } else {
            bScore = 50;
            sScore = 50;
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-1 w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-1.5 w-full rounded-full overflow-hidden bg-gray-200 dark:bg-slate-700",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-green-500 dark:bg-green-400 h-full transition-all duration-300",
                        style: {
                            width: `${bScore}%`
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/StrengthMeter.tsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-red-500 dark:bg-red-400 h-full transition-all duration-300",
                        style: {
                            width: `${sScore}%`
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/StrengthMeter.tsx",
                        lineNumber: 25,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/StrengthMeter.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between text-[10px] font-medium leading-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-green-600 dark:text-green-400", bScore > sScore ? "font-bold" : "opacity-70"),
                        children: bScore > sScore ? "Buyers" : ""
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/StrengthMeter.tsx",
                        lineNumber: 28,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-red-600 dark:text-red-400", sScore > bScore ? "font-bold" : "opacity-70"),
                        children: sScore > bScore ? "Sellers" : ""
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/StrengthMeter.tsx",
                        lineNumber: 31,
                        columnNumber: 17
                    }, this),
                    bScore === sScore && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gray-500 dark:text-gray-400",
                        children: "Balanced"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/StrengthMeter.tsx",
                        lineNumber: 34,
                        columnNumber: 39
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/StrengthMeter.tsx",
                lineNumber: 27,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/StrengthMeter.tsx",
        lineNumber: 22,
        columnNumber: 9
    }, this);
}
_c = StrengthMeter;
var _c;
__turbopack_context__.k.register(_c, "StrengthMeter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/StrengthTable.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StrengthTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AutoFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AutoFilter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$globalFilter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/globalFilter.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useStocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useStocks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$tableUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/tableUtils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$StrengthMeter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/StrengthMeter.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function StrengthTable({ stocks, isLoading, marketHeaders }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [displayCount, setDisplayCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(50);
    // Default headers if not provided
    const headers = {
        current: marketHeaders?.current || "Today Change",
        p1: marketHeaders?.p1 || "Past Day 1 %",
        p2: marketHeaders?.p2 || "Past Day 2 %",
        p3: marketHeaders?.p3 || "Past Day 3 %"
    };
    // Client-side state
    const [columnFilters, setColumnFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [sortConfig, setSortConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        key: "current_change",
        direction: "desc"
    });
    const { data: watchlist } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useStocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatchlist"])();
    const { mutate: toggleWatchlist } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useStocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToggleWatchlist"])();
    const isInWatchlist = (symbol)=>{
        return watchlist?.some((s)=>s.symbol === symbol);
    };
    const handleToggleWatchlist = (symbol)=>{
        const action = isInWatchlist(symbol) ? "remove" : "add";
        toggleWatchlist({
            symbol,
            action
        });
    };
    const handleRowClick = (symbol)=>{
        router.push(`/stocks/${symbol}`);
    };
    const handleFilterChange = (key, filter)=>{
        setColumnFilters((prev)=>{
            const next = {
                ...prev
            };
            if (filter === null) {
                delete next[key];
            } else {
                next[key] = filter;
            }
            return next;
        });
    };
    const handleSort = (key, direction)=>{
        setSortConfig({
            key,
            direction
        });
    };
    // Derived Data & Filtering
    const processedStocks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "StrengthTable.useMemo[processedStocks]": ()=>{
            if (!stocks) return [];
            // 2. Apply Column Filters
            const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$globalFilter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyColumnFilters"])(stocks, columnFilters);
            // 3. Sort
            return filtered.sort({
                "StrengthTable.useMemo[processedStocks]": (a, b)=>{
                    const { key, direction } = sortConfig;
                    let valA, valB;
                    // Special key handling for StrengthTable
                    // (We might need more robust accessing here if keys overlap with StocksTable)
                    if (key === "current_change") valA = a.current_change;
                    else if (key === "history.p_day1") valA = a.history?.p_day1;
                    else if (key === "day1_strength") valA = a.day1_strength;
                    else if (key === "history.p_day2") valA = a.history?.p_day2;
                    else if (key === "day2_strength") valA = a.day2_strength;
                    else if (key === "history.p_day3") valA = a.history?.p_day3;
                    else if (key === "day3_strength") valA = a.day3_strength;
                    else if (key === "derived.macdLabel") valA = a.derived?.macdLabel;
                    else if (key === "derived.rsiLabel") valA = a.derived?.rsiLabel;
                    else {
                        valA = key.split('.').reduce({
                            "StrengthTable.useMemo[processedStocks]": (o, i)=>o?.[i]
                        }["StrengthTable.useMemo[processedStocks]"], a);
                    }
                    if (valB === undefined) {
                        if (key === "current_change") valB = b.current_change;
                        else if (key === "history.p_day1") valB = b.history?.p_day1;
                        else if (key === "day1_strength") valB = b.day1_strength;
                        else if (key === "history.p_day2") valB = b.history?.p_day2;
                        else if (key === "day2_strength") valB = b.day2_strength;
                        else if (key === "history.p_day3") valB = b.history?.p_day3;
                        else if (key === "day3_strength") valB = b.day3_strength;
                        else if (key === "derived.macdLabel") valB = b.derived?.macdLabel;
                        else if (key === "derived.rsiLabel") valB = b.derived?.rsiLabel;
                        else {
                            valB = key.split('.').reduce({
                                "StrengthTable.useMemo[processedStocks]": (o, i)=>o?.[i]
                            }["StrengthTable.useMemo[processedStocks]"], b);
                        }
                    }
                    if (valA === undefined || valA === null) return 1;
                    if (valB === undefined || valB === null) return -1;
                    if (valA < valB) return direction === "asc" ? -1 : 1;
                    if (valA > valB) return direction === "asc" ? 1 : -1;
                    return 0;
                }
            }["StrengthTable.useMemo[processedStocks]"]);
        }
    }["StrengthTable.useMemo[processedStocks]"], [
        stocks,
        columnFilters,
        sortConfig
    ]);
    const displayedStocks = processedStocks.slice(0, displayCount);
    const getOptions = (key)=>{
        if (!stocks.length) return [];
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$tableUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUniqueValues"])(stocks, key);
    };
    const handleLoadMore = ()=>{
        setDisplayCount((prev)=>prev + 50);
    };
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                ...Array(5)
            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-16 bg-gray-100 dark:bg-slate-800 rounded-lg animate-pulse"
                }, i, false, {
                    fileName: "[project]/src/components/StrengthTable.tsx",
                    lineNumber: 142,
                    columnNumber: 21
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/StrengthTable.tsx",
            lineNumber: 140,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full overflow-x-auto min-h-[600px]", "rounded-2xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm dark:shadow-md"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "min-w-full table-auto border-separate border-spacing-y-1 text-sm text-left relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            className: "text-xs text-gray-600 dark:text-gray-300 uppercase bg-gray-50 dark:bg-slate-800 sticky top-0 z-20 backdrop-blur-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-3 py-2 w-28 sticky left-0 z-30 bg-gray-50 dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Symbol"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StrengthTable.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AutoFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    columnKey: "symbol",
                                                    title: "Symbol",
                                                    type: "text",
                                                    options: getOptions("symbol"),
                                                    onFilter: (f)=>handleFilterChange("symbol", f),
                                                    currentFilter: columnFilters["symbol"] || null,
                                                    onSort: (d)=>handleSort("symbol", d),
                                                    sortDirection: sortConfig.key === "symbol" ? sortConfig.direction : null
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StrengthTable.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 158,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StrengthTable.tsx",
                                        lineNumber: 157,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-3 py-2 w-28 text-center border-b border-gray-200 dark:border-slate-700",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: headers.current
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StrengthTable.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AutoFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    columnKey: "current_change",
                                                    title: headers.current,
                                                    type: "number",
                                                    onFilter: (f)=>handleFilterChange("current_change", f),
                                                    currentFilter: columnFilters["current_change"] || null,
                                                    onSort: (d)=>handleSort("current_change", d),
                                                    sortDirection: sortConfig.key === "current_change" ? sortConfig.direction : null
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StrengthTable.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 173,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StrengthTable.tsx",
                                        lineNumber: 172,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-3 py-2 w-36 text-center border-b border-gray-200 dark:border-slate-700",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Today Str"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StrengthTable.tsx",
                                                    lineNumber: 188,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AutoFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    columnKey: "current_strength",
                                                    title: "Today Str",
                                                    type: "enum",
                                                    options: [
                                                        "BUYERS",
                                                        "SELLERS",
                                                        "BALANCED"
                                                    ],
                                                    onFilter: (f)=>handleFilterChange("current_strength", f),
                                                    currentFilter: columnFilters["current_strength"] || null,
                                                    onSort: (d)=>handleSort("current_strength", d),
                                                    sortDirection: sortConfig.key === "current_strength" ? sortConfig.direction : null
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StrengthTable.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 187,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StrengthTable.tsx",
                                        lineNumber: 186,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-3 py-2 w-28 text-center border-b border-gray-200 dark:border-slate-700",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: headers.p1
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StrengthTable.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AutoFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    columnKey: "history.p_day1",
                                                    title: headers.p1,
                                                    type: "number",
                                                    onFilter: (f)=>handleFilterChange("history.p_day1", f),
                                                    currentFilter: columnFilters["history.p_day1"] || null,
                                                    onSort: (d)=>handleSort("history.p_day1", d),
                                                    sortDirection: sortConfig.key === "history.p_day1" ? sortConfig.direction : null
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StrengthTable.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 202,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StrengthTable.tsx",
                                        lineNumber: 201,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-3 py-2 w-36 text-center border-b border-gray-200 dark:border-slate-700",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "P1 Str"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StrengthTable.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AutoFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    columnKey: "day1_strength",
                                                    title: "P1 Str",
                                                    type: "enum",
                                                    options: [
                                                        "BUYERS",
                                                        "SELLERS",
                                                        "BALANCED"
                                                    ],
                                                    onFilter: (f)=>handleFilterChange("day1_strength", f),
                                                    currentFilter: columnFilters["day1_strength"] || null,
                                                    onSort: (d)=>handleSort("day1_strength", d),
                                                    sortDirection: sortConfig.key === "day1_strength" ? sortConfig.direction : null
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StrengthTable.tsx",
                                                    lineNumber: 218,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 216,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StrengthTable.tsx",
                                        lineNumber: 215,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-3 py-2 w-28 text-center border-b border-gray-200 dark:border-slate-700",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: headers.p2
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StrengthTable.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AutoFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    columnKey: "history.p_day2",
                                                    title: headers.p2,
                                                    type: "number",
                                                    onFilter: (f)=>handleFilterChange("history.p_day2", f),
                                                    currentFilter: columnFilters["history.p_day2"] || null,
                                                    onSort: (d)=>handleSort("history.p_day2", d),
                                                    sortDirection: sortConfig.key === "history.p_day2" ? sortConfig.direction : null
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StrengthTable.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 231,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StrengthTable.tsx",
                                        lineNumber: 230,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-3 py-2 w-36 text-center border-b border-gray-200 dark:border-slate-700",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "P2 Str"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StrengthTable.tsx",
                                                    lineNumber: 246,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AutoFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    columnKey: "day2_strength",
                                                    title: "P2 Str",
                                                    type: "enum",
                                                    options: [
                                                        "BUYERS",
                                                        "SELLERS",
                                                        "BALANCED"
                                                    ],
                                                    onFilter: (f)=>handleFilterChange("day2_strength", f),
                                                    currentFilter: columnFilters["day2_strength"] || null,
                                                    onSort: (d)=>handleSort("day2_strength", d),
                                                    sortDirection: sortConfig.key === "day2_strength" ? sortConfig.direction : null
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StrengthTable.tsx",
                                                    lineNumber: 247,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 245,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StrengthTable.tsx",
                                        lineNumber: 244,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-3 py-2 w-28 text-center border-b border-gray-200 dark:border-slate-700",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: headers.p3
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StrengthTable.tsx",
                                                    lineNumber: 261,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AutoFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    columnKey: "history.p_day3",
                                                    title: headers.p3,
                                                    type: "number",
                                                    onFilter: (f)=>handleFilterChange("history.p_day3", f),
                                                    currentFilter: columnFilters["history.p_day3"] || null,
                                                    onSort: (d)=>handleSort("history.p_day3", d),
                                                    sortDirection: sortConfig.key === "history.p_day3" ? sortConfig.direction : null
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StrengthTable.tsx",
                                                    lineNumber: 262,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 260,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StrengthTable.tsx",
                                        lineNumber: 259,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-3 py-2 w-36 text-center border-b border-gray-200 dark:border-slate-700",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "P3 Str"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StrengthTable.tsx",
                                                    lineNumber: 275,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AutoFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    columnKey: "day3_strength",
                                                    title: "P3 Str",
                                                    type: "enum",
                                                    options: [
                                                        "BUYERS",
                                                        "SELLERS",
                                                        "BALANCED"
                                                    ],
                                                    onFilter: (f)=>handleFilterChange("day3_strength", f),
                                                    currentFilter: columnFilters["day3_strength"] || null,
                                                    onSort: (d)=>handleSort("day3_strength", d),
                                                    sortDirection: sortConfig.key === "day3_strength" ? sortConfig.direction : null
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StrengthTable.tsx",
                                                    lineNumber: 276,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 274,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StrengthTable.tsx",
                                        lineNumber: 273,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-3 py-2 w-28 text-center border-b border-gray-200 dark:border-slate-700",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "3D Avg %"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StrengthTable.tsx",
                                                    lineNumber: 290,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AutoFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    columnKey: "history.avg_3day",
                                                    title: "3D Avg %",
                                                    type: "number",
                                                    onFilter: (f)=>handleFilterChange("history.avg_3day", f),
                                                    currentFilter: columnFilters["history.avg_3day"] || null,
                                                    onSort: (d)=>handleSort("history.avg_3day", d),
                                                    sortDirection: sortConfig.key === "history.avg_3day" ? sortConfig.direction : null
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StrengthTable.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 289,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StrengthTable.tsx",
                                        lineNumber: 288,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-3 py-2 w-40 text-center border-b border-gray-200 dark:border-slate-700",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "3D Avg Str"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StrengthTable.tsx",
                                                    lineNumber: 304,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AutoFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    columnKey: "avg_3day_strength",
                                                    title: "3D Avg Str",
                                                    type: "enum",
                                                    options: [
                                                        "BUYERS",
                                                        "SELLERS",
                                                        "BALANCED"
                                                    ],
                                                    onFilter: (f)=>handleFilterChange("avg_3day_strength", f),
                                                    currentFilter: columnFilters["avg_3day_strength"] || null,
                                                    onSort: (d)=>handleSort("avg_3day_strength", d),
                                                    sortDirection: sortConfig.key === "avg_3day_strength" ? sortConfig.direction : null
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StrengthTable.tsx",
                                                    lineNumber: 305,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 303,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StrengthTable.tsx",
                                        lineNumber: 302,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-3 py-2 w-44 text-center border-b border-gray-200 dark:border-slate-700",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Indicators"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StrengthTable.tsx",
                                                    lineNumber: 321,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AutoFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    columnKey: "derived.indicatorsList",
                                                    title: "Indicators",
                                                    type: "enum",
                                                    options: getOptions("derived.indicatorsList"),
                                                    onFilter: (f)=>handleFilterChange("derived.indicatorsList", f),
                                                    currentFilter: columnFilters["derived.indicatorsList"] || null,
                                                    onSort: (d)=>handleSort("derived.indicatorsList", d),
                                                    sortDirection: sortConfig.key === "derived.indicatorsList" ? sortConfig.direction : null
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StrengthTable.tsx",
                                                    lineNumber: 322,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 320,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StrengthTable.tsx",
                                        lineNumber: 319,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-3 py-2 w-16 text-center border-b border-gray-200 dark:border-slate-700",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "M"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StrengthTable.tsx",
                                                    lineNumber: 338,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AutoFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    columnKey: "derived.macdLabel",
                                                    title: "M",
                                                    type: "enum",
                                                    options: [
                                                        "Above",
                                                        "Below",
                                                        "Neutral"
                                                    ],
                                                    onFilter: (f)=>handleFilterChange("derived.macdLabel", f),
                                                    currentFilter: columnFilters["derived.macdLabel"] || null,
                                                    onSort: (d)=>handleSort("derived.macdLabel", d),
                                                    sortDirection: sortConfig.key === "derived.macdLabel" ? sortConfig.direction : null
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StrengthTable.tsx",
                                                    lineNumber: 339,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 337,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StrengthTable.tsx",
                                        lineNumber: 336,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-3 py-2 w-16 text-center border-b border-gray-200 dark:border-slate-700",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "R"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StrengthTable.tsx",
                                                    lineNumber: 355,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AutoFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    columnKey: "derived.rsiLabel",
                                                    title: "R",
                                                    type: "enum",
                                                    options: [
                                                        "Over",
                                                        "Under",
                                                        "Neutral"
                                                    ],
                                                    onFilter: (f)=>handleFilterChange("derived.rsiLabel", f),
                                                    currentFilter: columnFilters["derived.rsiLabel"] || null,
                                                    onSort: (d)=>handleSort("derived.rsiLabel", d),
                                                    sortDirection: sortConfig.key === "derived.rsiLabel" ? sortConfig.direction : null
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StrengthTable.tsx",
                                                    lineNumber: 356,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 354,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StrengthTable.tsx",
                                        lineNumber: 353,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-3 py-2 w-12 text-center border-b border-gray-200 dark:border-slate-700",
                                        children: "Action"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StrengthTable.tsx",
                                        lineNumber: 370,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/StrengthTable.tsx",
                                lineNumber: 155,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/StrengthTable.tsx",
                            lineNumber: 154,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            className: "divide-y divide-gray-200 dark:divide-slate-700",
                            children: displayedStocks.map((stock)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "hover:bg-gray-100 dark:hover:bg-slate-700/50 transition-colors group cursor-pointer border-b border-gray-200 dark:border-slate-700 last:border-0",
                                    onClick: ()=>handleRowClick(stock.symbol),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-2 whitespace-nowrap sticky left-0 z-10 bg-white dark:bg-slate-800 group-hover:bg-gray-100 dark:group-hover:bg-slate-700/50 border-r border-gray-200 dark:border-slate-700",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-bold text-gray-900 dark:text-gray-100",
                                                children: stock.symbol
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/StrengthTable.tsx",
                                                lineNumber: 384,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 383,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-3 py-2 whitespace-nowrap font-medium text-center", (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$tableUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPctColor"])(stock.current_change)),
                                            children: [
                                                stock.current_change?.toFixed(2) || "0.00",
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 388,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-2 whitespace-nowrap text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$StrengthMeter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StrengthMeter"], {
                                                label: stock.current_strength,
                                                buyerScore: stock.indicators.buyer_strength_score,
                                                sellerScore: stock.indicators.seller_strength_score
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/StrengthTable.tsx",
                                                lineNumber: 394,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 393,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-3 py-2 whitespace-nowrap text-xs text-center", (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$tableUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPctColor"])(stock.history.p_day1)),
                                            children: [
                                                stock.history.p_day1?.toFixed(2) || "-",
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 402,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-2 whitespace-nowrap text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$StrengthMeter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StrengthMeter"], {
                                                label: stock.day1_strength
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/StrengthTable.tsx",
                                                lineNumber: 408,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 407,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-3 py-2 whitespace-nowrap text-xs text-center", (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$tableUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPctColor"])(stock.history.p_day2)),
                                            children: [
                                                stock.history.p_day2?.toFixed(2) || "-",
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 412,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-2 whitespace-nowrap text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$StrengthMeter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StrengthMeter"], {
                                                label: stock.day2_strength
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/StrengthTable.tsx",
                                                lineNumber: 418,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 417,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-3 py-2 whitespace-nowrap text-xs text-center", (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$tableUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPctColor"])(stock.history.p_day3)),
                                            children: [
                                                stock.history.p_day3?.toFixed(2) || "-",
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 422,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-2 whitespace-nowrap text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$StrengthMeter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StrengthMeter"], {
                                                label: stock.day3_strength
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/StrengthTable.tsx",
                                                lineNumber: 428,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 427,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-3 py-2 whitespace-nowrap font-medium text-center", (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$tableUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPctColor"])(stock.history.avg_3day)),
                                            children: [
                                                stock.history.avg_3day?.toFixed(2) || "0.00",
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 432,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-2 whitespace-nowrap text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$StrengthMeter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StrengthMeter"], {
                                                label: stock.avg_3day_strength
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/StrengthTable.tsx",
                                                lineNumber: 438,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 437,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-2 whitespace-nowrap text-[10px] text-center text-gray-500 dark:text-gray-400",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-center gap-0.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(stock.derived.macdLabel === "Above" ? "text-green-600 dark:text-green-400" : stock.derived.macdLabel === "Below" ? "text-red-600 dark:text-red-400" : "text-gray-500 dark:text-gray-400"),
                                                        children: [
                                                            "MACD: ",
                                                            stock.derived.macdLabel
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/StrengthTable.tsx",
                                                        lineNumber: 444,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(stock.derived.rsiLabel === "Under" ? "text-green-600 dark:text-green-400" : stock.derived.rsiLabel === "Over" ? "text-red-600 dark:text-red-400" : "text-gray-500 dark:text-gray-400"),
                                                        children: [
                                                            "RSI: ",
                                                            stock.derived.rsiLabel
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/StrengthTable.tsx",
                                                        lineNumber: 447,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/StrengthTable.tsx",
                                                lineNumber: 443,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 442,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-2 whitespace-nowrap text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-4 h-4 mx-auto", stock.derived.macdLabel === "Above" ? "text-green-500 dark:text-green-400" : stock.derived.macdLabel === "Below" ? "text-red-500 dark:text-red-400" : "text-gray-500 dark:text-gray-500")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/StrengthTable.tsx",
                                                lineNumber: 455,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 454,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-2 whitespace-nowrap text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-4 h-4 mx-auto", stock.derived.rsiLabel === "Under" ? "text-green-500 dark:text-green-400" : stock.derived.rsiLabel === "Over" ? "text-red-500 dark:text-red-400" : "text-blue-400 dark:text-blue-500")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/StrengthTable.tsx",
                                                lineNumber: 460,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 459,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-2 whitespace-nowrap text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "p-1.5 hover:bg-gray-200 dark:hover:bg-slate-600 rounded-full transition-colors text-gray-400 dark:text-gray-500 hover:text-yellow-500 dark:hover:text-yellow-400",
                                                onClick: (e)=>{
                                                    e.stopPropagation();
                                                    handleToggleWatchlist(stock.symbol);
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-4 h-4", isInWatchlist(stock.symbol) ? "fill-yellow-500 text-yellow-500 dark:text-yellow-400 dark:fill-yellow-400" : "")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StrengthTable.tsx",
                                                    lineNumber: 472,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/StrengthTable.tsx",
                                                lineNumber: 465,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 464,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, stock.symbol, true, {
                                    fileName: "[project]/src/components/StrengthTable.tsx",
                                    lineNumber: 377,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/StrengthTable.tsx",
                            lineNumber: 375,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/StrengthTable.tsx",
                    lineNumber: 153,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/StrengthTable.tsx",
                lineNumber: 150,
                columnNumber: 13
            }, this),
            processedStocks.length > displayCount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleLoadMore,
                    className: "px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-medium transition-colors shadow-sm",
                    children: "Load More"
                }, void 0, false, {
                    fileName: "[project]/src/components/StrengthTable.tsx",
                    lineNumber: 484,
                    columnNumber: 25
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/StrengthTable.tsx",
                lineNumber: 483,
                columnNumber: 21
            }, this)
        ]
    }, void 0, true);
}
_s(StrengthTable, "CSjuXKeKGzJTU6eGeJmfgQMlu6s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useStocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatchlist"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useStocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToggleWatchlist"]
    ];
});
_c = StrengthTable;
var _c;
__turbopack_context__.k.register(_c, "StrengthTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/FilterDrawer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FilterDrawer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@headlessui/react/dist/components/dialog/dialog.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@headlessui/react/dist/components/transition/transition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$disclosure$2f$disclosure$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@headlessui/react/dist/components/disclosure/disclosure.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function FilterDrawer({ isOpen, onClose, filters, setFilters, onReset }) {
    _s();
    // Persist filters to localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FilterDrawer.useEffect": ()=>{
            const saved = localStorage.getItem("stockFilters");
            if (saved) {
                try {
                    const parsed = JSON.parse(saved);
                    // Only load if not empty to avoid overwriting initial state if needed
                    if (Object.keys(parsed).length > 0) {
                    // We don't auto-set here to avoid infinite loops or hydration mismatch
                    // But we could offer a "Load Saved" or just init state in parent.
                    // For now, let's just save when changed.
                    }
                } catch (e) {
                    console.error("Failed to load filters", e);
                }
            }
        }
    }["FilterDrawer.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FilterDrawer.useEffect": ()=>{
            localStorage.setItem("stockFilters", JSON.stringify(filters));
        }
    }["FilterDrawer.useEffect"], [
        filters
    ]);
    const handleInputChange = (key, value)=>{
        setFilters((prev)=>{
            const next = {
                ...prev,
                [key]: value
            };
            if (value === "" || value === null) delete next[key];
            return next;
        });
    };
    const handleCheckboxChange = (key, checked)=>{
        setFilters((prev)=>{
            const next = {
                ...prev,
                [key]: checked
            };
            if (!checked) delete next[key];
            return next;
        });
    };
    const FilterSection = ({ title, children, defaultOpen = true })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$disclosure$2f$disclosure$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disclosure"], {
            defaultOpen: defaultOpen,
            children: ({ open })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-b border-gray-200 dark:border-slate-700 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$disclosure$2f$disclosure$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disclosure"].Button, {
                            className: "flex w-full justify-between items-center text-left text-sm font-medium text-gray-900 dark:text-white focus:outline-none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FilterDrawer.tsx",
                                    lineNumber: 66,
                                    columnNumber: 25
                                }, this),
                                open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                    className: "h-4 w-4 text-gray-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FilterDrawer.tsx",
                                    lineNumber: 67,
                                    columnNumber: 33
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                    className: "h-4 w-4 text-gray-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FilterDrawer.tsx",
                                    lineNumber: 67,
                                    columnNumber: 83
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FilterDrawer.tsx",
                            lineNumber: 65,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$disclosure$2f$disclosure$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disclosure"].Panel, {
                            className: "pt-4 space-y-4",
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/src/components/FilterDrawer.tsx",
                            lineNumber: 69,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/FilterDrawer.tsx",
                    lineNumber: 64,
                    columnNumber: 17
                }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/FilterDrawer.tsx",
            lineNumber: 62,
            columnNumber: 9
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transition"].Root, {
        show: isOpen,
        as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
            as: "div",
            className: "relative z-50",
            onClose: onClose,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transition"].Child, {
                    as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"],
                    enter: "ease-in-out duration-300",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in-out duration-300",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 bg-black/50 transition-opacity"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterDrawer.tsx",
                        lineNumber: 89,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/FilterDrawer.tsx",
                    lineNumber: 80,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transition"].Child, {
                                as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"],
                                enter: "transform transition ease-in-out duration-300 sm:duration-500",
                                enterFrom: "-translate-x-full",
                                enterTo: "translate-x-0",
                                leave: "transform transition ease-in-out duration-300 sm:duration-500",
                                leaveFrom: "translate-x-0",
                                leaveTo: "-translate-x-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"].Panel, {
                                    className: "pointer-events-auto w-screen max-w-md",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex h-full flex-col overflow-y-scroll bg-white dark:bg-slate-900 shadow-xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-4 py-6 sm:px-6 border-b border-gray-200 dark:border-slate-700",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"].Title, {
                                                            className: "text-lg font-semibold text-gray-900 dark:text-white",
                                                            children: "Advanced Filters"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/FilterDrawer.tsx",
                                                            lineNumber: 108,
                                                            columnNumber: 49
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "ml-3 flex h-7 items-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                className: "relative -m-2 p-2 text-gray-400 hover:text-gray-500",
                                                                onClick: onClose,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "absolute -inset-0.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                        lineNumber: 117,
                                                                        columnNumber: 57
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "sr-only",
                                                                        children: "Close panel"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                        lineNumber: 118,
                                                                        columnNumber: 57
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                        className: "h-6 w-6",
                                                                        "aria-hidden": "true"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                        lineNumber: 119,
                                                                        columnNumber: 57
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                lineNumber: 112,
                                                                columnNumber: 53
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/FilterDrawer.tsx",
                                                            lineNumber: 111,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/FilterDrawer.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/FilterDrawer.tsx",
                                                lineNumber: 106,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative flex-1 px-4 py-6 sm:px-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
                                                                children: "Search Symbol"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                lineNumber: 128,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                placeholder: "e.g. RELIANCE",
                                                                className: "w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-md px-3 py-2 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none",
                                                                value: filters.search || "",
                                                                onChange: (e)=>handleInputChange("search", e.target.value)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                lineNumber: 131,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/FilterDrawer.tsx",
                                                        lineNumber: 127,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterSection, {
                                                        title: "Market Data",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-2 gap-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "block text-xs text-gray-500 dark:text-gray-400 mb-1",
                                                                                children: "Min Price"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                                lineNumber: 144,
                                                                                columnNumber: 57
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "number",
                                                                                className: "w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded px-2 py-1 text-sm text-gray-900 dark:text-white outline-none",
                                                                                value: filters.min_price || "",
                                                                                onChange: (e)=>handleInputChange("min_price", e.target.value)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                                lineNumber: 145,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                        lineNumber: 143,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "block text-xs text-gray-500 dark:text-gray-400 mb-1",
                                                                                children: "Max Price"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                                lineNumber: 153,
                                                                                columnNumber: 57
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "number",
                                                                                className: "w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded px-2 py-1 text-sm text-gray-900 dark:text-white outline-none",
                                                                                value: filters.max_price || "",
                                                                                onChange: (e)=>handleInputChange("max_price", e.target.value)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                                lineNumber: 154,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                        lineNumber: 152,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                lineNumber: 142,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-xs text-gray-500 dark:text-gray-400 mb-1",
                                                                        children: "Sector"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                        lineNumber: 164,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        className: "w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded px-2 py-1 text-sm text-gray-900 dark:text-white outline-none",
                                                                        value: filters.sector || "",
                                                                        onChange: (e)=>handleInputChange("sector", e.target.value),
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "",
                                                                                children: "All Sectors"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                                lineNumber: 170,
                                                                                columnNumber: 57
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "Nifty 50",
                                                                                children: "Nifty 50"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                                lineNumber: 171,
                                                                                columnNumber: 57
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "Bank Nifty",
                                                                                children: "Bank Nifty"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                                lineNumber: 172,
                                                                                columnNumber: 57
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "IT",
                                                                                children: "IT"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                                lineNumber: 173,
                                                                                columnNumber: 57
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "Auto",
                                                                                children: "Auto"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                                lineNumber: 174,
                                                                                columnNumber: 57
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "Pharma",
                                                                                children: "Pharma"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                                lineNumber: 175,
                                                                                columnNumber: 57
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "FMCG",
                                                                                children: "FMCG"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                                lineNumber: 176,
                                                                                columnNumber: 57
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "Metals",
                                                                                children: "Metals"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                                lineNumber: 177,
                                                                                columnNumber: 57
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "Energy",
                                                                                children: "Energy"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                                lineNumber: 178,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                        lineNumber: 165,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                lineNumber: 163,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/FilterDrawer.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterSection, {
                                                        title: "Performance (3-Day)",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-2 gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-xs text-gray-500 dark:text-gray-400 mb-1",
                                                                            children: "Min Avg %"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                            lineNumber: 186,
                                                                            columnNumber: 57
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "number",
                                                                            step: "0.1",
                                                                            className: "w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded px-2 py-1 text-sm text-gray-900 dark:text-white outline-none",
                                                                            value: filters.min_avg_3day_pct || "",
                                                                            onChange: (e)=>handleInputChange("min_avg_3day_pct", e.target.value)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                            lineNumber: 187,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                    lineNumber: 185,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-xs text-gray-500 dark:text-gray-400 mb-1",
                                                                            children: "Max Avg %"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                            lineNumber: 196,
                                                                            columnNumber: 57
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "number",
                                                                            step: "0.1",
                                                                            className: "w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded px-2 py-1 text-sm text-gray-900 dark:text-white outline-none",
                                                                            value: filters.max_avg_3day_pct || "",
                                                                            onChange: (e)=>handleInputChange("max_avg_3day_pct", e.target.value)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                            lineNumber: 197,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                    lineNumber: 195,
                                                                    columnNumber: 53
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/FilterDrawer.tsx",
                                                            lineNumber: 184,
                                                            columnNumber: 49
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/FilterDrawer.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterSection, {
                                                        title: "Quick Filters",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "flex items-center gap-2 cursor-pointer",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "checkbox",
                                                                            className: "rounded bg-gray-200 dark:bg-slate-700 border-gray-300 dark:border-slate-600 text-blue-600",
                                                                            checked: filters.constant_only || false,
                                                                            onChange: (e)=>handleCheckboxChange("constant_only", e.target.checked)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                            lineNumber: 211,
                                                                            columnNumber: 57
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm text-gray-700 dark:text-gray-300",
                                                                            children: "Constant Price (Stability)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                            lineNumber: 217,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                    lineNumber: 210,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "flex items-center gap-2 cursor-pointer",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "checkbox",
                                                                            className: "rounded bg-gray-200 dark:bg-slate-700 border-gray-300 dark:border-slate-600 text-blue-600",
                                                                            checked: filters.gainers_only || false,
                                                                            onChange: (e)=>handleCheckboxChange("gainers_only", e.target.checked)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                            lineNumber: 220,
                                                                            columnNumber: 57
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm text-gray-700 dark:text-gray-300",
                                                                            children: "Gainers Only"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                            lineNumber: 226,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                    lineNumber: 219,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "flex items-center gap-2 cursor-pointer",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "checkbox",
                                                                            className: "rounded bg-gray-200 dark:bg-slate-700 border-gray-300 dark:border-slate-600 text-blue-600",
                                                                            checked: filters.losers_only || false,
                                                                            onChange: (e)=>handleCheckboxChange("losers_only", e.target.checked)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                            lineNumber: 229,
                                                                            columnNumber: 57
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm text-gray-700 dark:text-gray-300",
                                                                            children: "Losers Only"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                            lineNumber: 235,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                    lineNumber: 228,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "flex items-center gap-2 cursor-pointer",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "checkbox",
                                                                            className: "rounded bg-gray-200 dark:bg-slate-700 border-gray-300 dark:border-slate-600 text-blue-600",
                                                                            checked: filters.high_volume_only || false,
                                                                            onChange: (e)=>handleCheckboxChange("high_volume_only", e.target.checked)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                            lineNumber: 238,
                                                                            columnNumber: 57
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm text-gray-700 dark:text-gray-300",
                                                                            children: "High Volume Only"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                            lineNumber: 244,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                    lineNumber: 237,
                                                                    columnNumber: 53
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/FilterDrawer.tsx",
                                                            lineNumber: 209,
                                                            columnNumber: 49
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/FilterDrawer.tsx",
                                                        lineNumber: 208,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterSection, {
                                                        title: "Technical Indicators",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-xs text-gray-500 dark:text-gray-400 mb-1",
                                                                            children: "MACD Status"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                            lineNumber: 252,
                                                                            columnNumber: 57
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                            className: "w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded px-2 py-1 text-sm text-gray-900 dark:text-white outline-none",
                                                                            value: filters.macd_status || "",
                                                                            onChange: (e)=>handleInputChange("macd_status", e.target.value),
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "",
                                                                                    children: "Any"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                                    lineNumber: 258,
                                                                                    columnNumber: 61
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "above",
                                                                                    children: "Above Zero (Bullish)"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                                    lineNumber: 259,
                                                                                    columnNumber: 61
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "below",
                                                                                    children: "Below Zero (Bearish)"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                                    lineNumber: 260,
                                                                                    columnNumber: 61
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "neutral",
                                                                                    children: "Near Zero (Neutral)"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                                    lineNumber: 261,
                                                                                    columnNumber: 61
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                            lineNumber: 253,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                    lineNumber: 251,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-xs text-gray-500 dark:text-gray-400 mb-1",
                                                                            children: "RSI Zone"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                            lineNumber: 265,
                                                                            columnNumber: 57
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                            className: "w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded px-2 py-1 text-sm text-gray-900 dark:text-white outline-none",
                                                                            value: filters.rsi_zone || "",
                                                                            onChange: (e)=>handleInputChange("rsi_zone", e.target.value),
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "",
                                                                                    children: "Any"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                                    lineNumber: 271,
                                                                                    columnNumber: 61
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "overbought",
                                                                                    children: "Overbought"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                                    lineNumber: 272,
                                                                                    columnNumber: 61
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "oversold",
                                                                                    children: "Oversold"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                                    lineNumber: 273,
                                                                                    columnNumber: 61
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "neutral",
                                                                                    children: "Neutral"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                                    lineNumber: 274,
                                                                                    columnNumber: 61
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                            lineNumber: 266,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                    lineNumber: 264,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-xs text-gray-500 dark:text-gray-400 mb-1",
                                                                            children: "Strength"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                            lineNumber: 278,
                                                                            columnNumber: 57
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                            className: "w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded px-2 py-1 text-sm text-gray-900 dark:text-white outline-none",
                                                                            value: filters.strength || "",
                                                                            onChange: (e)=>handleInputChange("strength", e.target.value),
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "",
                                                                                    children: "Any"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                                    lineNumber: 284,
                                                                                    columnNumber: 61
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "BUYERS",
                                                                                    children: "Buyers Dominating"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                                    lineNumber: 285,
                                                                                    columnNumber: 61
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "SELLERS",
                                                                                    children: "Sellers Dominating"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                                    lineNumber: 286,
                                                                                    columnNumber: 61
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "BALANCED",
                                                                                    children: "Balanced"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                                    lineNumber: 287,
                                                                                    columnNumber: 61
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                            lineNumber: 279,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                    lineNumber: 277,
                                                                    columnNumber: 53
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/FilterDrawer.tsx",
                                                            lineNumber: 250,
                                                            columnNumber: 49
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/FilterDrawer.tsx",
                                                        lineNumber: 249,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/FilterDrawer.tsx",
                                                lineNumber: 124,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border-t border-gray-200 dark:border-slate-700 px-4 py-6 sm:px-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: "flex w-full items-center justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600",
                                                    onClick: onReset,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                                            className: "w-4 h-4 mr-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/FilterDrawer.tsx",
                                                            lineNumber: 300,
                                                            columnNumber: 49
                                                        }, this),
                                                        "Reset All Filters"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/FilterDrawer.tsx",
                                                    lineNumber: 295,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/FilterDrawer.tsx",
                                                lineNumber: 294,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/FilterDrawer.tsx",
                                        lineNumber: 105,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FilterDrawer.tsx",
                                    lineNumber: 104,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/FilterDrawer.tsx",
                                lineNumber: 95,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/FilterDrawer.tsx",
                            lineNumber: 94,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterDrawer.tsx",
                        lineNumber: 93,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/FilterDrawer.tsx",
                    lineNumber: 92,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/FilterDrawer.tsx",
            lineNumber: 79,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/FilterDrawer.tsx",
        lineNumber: 78,
        columnNumber: 9
    }, this);
}
_s(FilterDrawer, "3ubReDTFssvu4DHeldAg55cW/CI=");
_c = FilterDrawer;
var _c;
__turbopack_context__.k.register(_c, "FilterDrawer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/QuickFiltersToolbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuickFiltersToolbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function QuickFiltersToolbar({ filters, setFilters, onReset, className }) {
    const FilterPill = ({ label, active, onClick, icon: Icon })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClick,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 whitespace-nowrap", active ? "text-primary-foreground shadow-md" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"),
            children: [
                active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    layoutId: "activePill",
                    className: "absolute inset-0 bg-primary rounded-full",
                    transition: {
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/QuickFiltersToolbar.tsx",
                    lineNumber: 27,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "relative z-10 flex items-center gap-2",
                    children: [
                        Icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/QuickFiltersToolbar.tsx",
                            lineNumber: 34,
                            columnNumber: 26
                        }, this),
                        label
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/QuickFiltersToolbar.tsx",
                    lineNumber: 33,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/QuickFiltersToolbar.tsx",
            lineNumber: 17,
            columnNumber: 9
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col sm:flex-row items-center justify-between gap-4 p-4 border-b border-border", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full sm:w-64",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                        className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                    }, void 0, false, {
                        fileName: "[project]/src/components/QuickFiltersToolbar.tsx",
                        lineNumber: 45,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Search stocks...",
                        value: filters.search || "",
                        onChange: (e)=>setFilters((p)=>({
                                    ...p,
                                    search: e.target.value
                                })),
                        className: "w-full pl-9 pr-4 py-2 rounded-full text-sm border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all shadow-sm"
                    }, void 0, false, {
                        fileName: "[project]/src/components/QuickFiltersToolbar.tsx",
                        lineNumber: 46,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/QuickFiltersToolbar.tsx",
                lineNumber: 44,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2 p-1.5 bg-muted/50 rounded-full border border-border/50 w-full sm:w-auto overflow-x-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterPill, {
                        label: "All Stocks",
                        active: !filters.gainers_only && !filters.losers_only && !filters.high_volume_only,
                        onClick: ()=>setFilters((p)=>{
                                const { gainers_only, losers_only, high_volume_only, ...rest } = p;
                                return rest;
                            })
                    }, void 0, false, {
                        fileName: "[project]/src/components/QuickFiltersToolbar.tsx",
                        lineNumber: 56,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterPill, {
                        label: "Gainers",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
                        active: filters.gainers_only,
                        onClick: ()=>setFilters((p)=>({
                                    ...p,
                                    gainers_only: !p.gainers_only,
                                    losers_only: false
                                }))
                    }, void 0, false, {
                        fileName: "[project]/src/components/QuickFiltersToolbar.tsx",
                        lineNumber: 64,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterPill, {
                        label: "Losers",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"],
                        active: filters.losers_only,
                        onClick: ()=>setFilters((p)=>({
                                    ...p,
                                    losers_only: !p.losers_only,
                                    gainers_only: false
                                }))
                    }, void 0, false, {
                        fileName: "[project]/src/components/QuickFiltersToolbar.tsx",
                        lineNumber: 70,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterPill, {
                        label: "High Volume",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
                        active: filters.high_volume_only,
                        onClick: ()=>setFilters((p)=>({
                                    ...p,
                                    high_volume_only: !p.high_volume_only
                                }))
                    }, void 0, false, {
                        fileName: "[project]/src/components/QuickFiltersToolbar.tsx",
                        lineNumber: 76,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/QuickFiltersToolbar.tsx",
                lineNumber: 55,
                columnNumber: 13
            }, this),
            Object.keys(filters).length > 0 && onReset && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onReset,
                className: "px-4 py-2 text-sm font-medium text-destructive hover:bg-destructive/10 rounded-full transition-colors flex items-center gap-2 whitespace-nowrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/QuickFiltersToolbar.tsx",
                        lineNumber: 89,
                        columnNumber: 21
                    }, this),
                    " Clear Filters"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/QuickFiltersToolbar.tsx",
                lineNumber: 85,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/QuickFiltersToolbar.tsx",
        lineNumber: 41,
        columnNumber: 9
    }, this);
}
_c = QuickFiltersToolbar;
var _c;
__turbopack_context__.k.register(_c, "QuickFiltersToolbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/angleone/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AngleOnePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useStocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useStocks.ts [app-client] (ecmascript)"); // Changed Hook
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StrengthTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/StrengthTable.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-ccw.js [app-client] (ecmascript) <export default as RefreshCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$FilterContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/FilterContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterDrawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FilterDrawer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuickFiltersToolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/QuickFiltersToolbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$globalFilter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/globalFilter.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function AngleOnePage() {
    _s();
    // Local state for API params (if any specific API filters are needed)
    // For now, we fetch all and filter client-side for consistency with other pages
    const { data: stocks, isLoading, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useStocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGrowwStrength"])({}); // Changed Hook
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const { isDrawerOpen, closeDrawer, setFilterCount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$FilterContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilter"])();
    // Sync filter count to context
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AngleOnePage.useEffect": ()=>{
            const count = Object.keys(filters).length;
            setFilterCount(count);
        }
    }["AngleOnePage.useEffect"], [
        filters,
        setFilterCount
    ]);
    const handleReset = ()=>{
        setFilters({});
        setSearch("");
    };
    // Apply Global Filter + Search
    const filteredStocks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AngleOnePage.useMemo[filteredStocks]": ()=>{
            let result = stocks || [];
            // 0. Enrich Data
            result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$globalFilter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enrichStockData"])(result);
            // 1. Search
            if (search) {
                const q = search.toLowerCase();
                result = result.filter({
                    "AngleOnePage.useMemo[filteredStocks]": (s)=>s.symbol.toLowerCase().includes(q) || s.name?.toLowerCase().includes(q)
                }["AngleOnePage.useMemo[filteredStocks]"]);
            }
            // 2. Filters
            // Cast as StockStrength[] because globalFilter returns Stock[] but preserves properties
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$globalFilter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalFilter"])(result, filters);
        }
    }["AngleOnePage.useMemo[filteredStocks]"], [
        stocks,
        search,
        filters
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen w-full bg-background text-foreground p-4 md:p-6 animate-in fade-in duration-500",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterDrawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isDrawerOpen,
                onClose: closeDrawer,
                filters: filters,
                setFilters: setFilters,
                onReset: handleReset
            }, void 0, false, {
                fileName: "[project]/src/app/angleone/page.tsx",
                lineNumber: 55,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full space-y-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row justify-between items-start md:items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl font-semibold text-foreground",
                                    children: "Fast Data Load"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/angleone/page.tsx",
                                    lineNumber: 68,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground mt-1",
                                    children: [
                                        "Real-time strength analysis using AngleOne SmartAPI (",
                                        filteredStocks.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/angleone/page.tsx",
                                    lineNumber: 71,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/angleone/page.tsx",
                            lineNumber: 67,
                            columnNumber: 21
                        }, this),
                        Object.keys(filters).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleReset,
                            className: "px-3 py-2 rounded-lg text-sm font-medium text-red-600 hover:bg-destructive/10 transition-colors flex items-center gap-2 whitespace-nowrap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/angleone/page.tsx",
                                    lineNumber: 81,
                                    columnNumber: 29
                                }, this),
                                " Clear"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/angleone/page.tsx",
                            lineNumber: 77,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>refetch(),
                            className: "p-2 bg-card border border-border rounded-lg hover:bg-accent transition-colors text-muted-foreground",
                            title: "Refresh Data",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCcw$3e$__["RefreshCcw"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/app/angleone/page.tsx",
                                lineNumber: 90,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/angleone/page.tsx",
                            lineNumber: 85,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/angleone/page.tsx",
                    lineNumber: 66,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/angleone/page.tsx",
                lineNumber: 63,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-card text-card-foreground rounded-3xl shadow-sm dark:shadow-md border border-border overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuickFiltersToolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        filters: filters,
                        setFilters: setFilters,
                        onReset: handleReset
                    }, void 0, false, {
                        fileName: "[project]/src/app/angleone/page.tsx",
                        lineNumber: 97,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 pt-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StrengthTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            stocks: filteredStocks,
                            isLoading: isLoading
                        }, void 0, false, {
                            fileName: "[project]/src/app/angleone/page.tsx",
                            lineNumber: 103,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/angleone/page.tsx",
                        lineNumber: 102,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/angleone/page.tsx",
                lineNumber: 96,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/angleone/page.tsx",
        lineNumber: 54,
        columnNumber: 9
    }, this);
}
_s(AngleOnePage, "+engdLPlGsnIneNTwrwmm5+pBl4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useStocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGrowwStrength"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$FilterContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilter"]
    ];
});
_c = AngleOnePage;
var _c;
__turbopack_context__.k.register(_c, "AngleOnePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_3efdc64a._.js.map