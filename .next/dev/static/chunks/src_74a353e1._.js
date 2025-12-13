(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/hooks/useStocks.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGainers3Day",
    ()=>useGainers3Day,
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
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature();
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
        refetchInterval: 15000,
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
    "globalFilter",
    ()=>globalFilter
]);
const globalFilter = (data, filters)=>{
    if (!data || !filters) return data || [];
    // 1. Enrich data with derived fields for easier filtering (same logic as before)
    const enriched = data.map((stock)=>{
        // 3D Average Strength Logic
        let strength3D = "Neutral";
        if (stock.history.avg_3_day_change_pct > 0.5) strength3D = "Strong Buyers";
        else if (stock.history.avg_3_day_change_pct < -0.5) strength3D = "Strong Sellers";
        // Indicators Composite
        const indicatorsList = [];
        if (stock.indicators.macd_status === "above_zero") indicatorsList.push("MACD Above Zero (Bullish)");
        if (stock.indicators.macd_status === "below_zero") indicatorsList.push("MACD Below Zero (Bearish)");
        if (stock.indicators.macd_status === "near_zero") indicatorsList.push("MACD Near Zero (Neutral)");
        if (stock.indicators.rsi_status === "overbought") indicatorsList.push("RSI Overbought");
        if (stock.indicators.rsi_status === "oversold") indicatorsList.push("RSI Oversold");
        if (stock.indicators.rsi_status === "neutral") indicatorsList.push("RSI Neutral");
        return {
            ...stock,
            derived: {
                strength3D,
                indicatorsList,
                macdLabel: stock.indicators.macd_status === "above_zero" ? "Above Zero" : stock.indicators.macd_status === "below_zero" ? "Below Zero" : "Near Zero",
                rsiLabel: stock.indicators.rsi_status === "overbought" ? "Overbought" : stock.indicators.rsi_status === "oversold" ? "Oversold" : "Neutral",
                strengthLabel: stock.indicators.strength_label === "buyers" ? "Buyers Dominating" : stock.indicators.strength_label === "sellers" ? "Sellers Dominating" : "Balanced"
            }
        };
    });
    // 2. Filter
    return enriched.filter((stock)=>{
        // Handle "Quick Filters" (boolean flags from FilterDrawer)
        if (filters.search && !stock.symbol.toLowerCase().includes(filters.search.toLowerCase()) && !stock.name?.toLowerCase().includes(filters.search.toLowerCase())) return false;
        if (filters.sector && stock.sector !== filters.sector) return false;
        if (filters.min_price && stock.current_price < Number(filters.min_price)) return false;
        if (filters.max_price && stock.current_price > Number(filters.max_price)) return false;
        if (filters.min_avg_3day_pct && stock.history.avg_3_day_change_pct < Number(filters.min_avg_3day_pct)) return false;
        if (filters.max_avg_3day_pct && stock.history.avg_3_day_change_pct > Number(filters.max_avg_3day_pct)) return false;
        if (filters.constant_only && !stock.flags.is_constant_price) return false;
        if (filters.gainers_only && stock.current_change_pct <= 0) return false;
        if (filters.losers_only && stock.current_change_pct >= 0) return false;
        if (filters.high_volume_only && !stock.flags.is_high_volume) return false;
        if (filters.macd_status && stock.indicators.macd_status !== filters.macd_status) return false;
        if (filters.rsi_zone && stock.indicators.rsi_status !== filters.rsi_zone) return false;
        if (filters.strength && stock.indicators.strength_label !== filters.strength) return false;
        // Handle Column-Specific AutoFilters (from Table Headers)
        // These keys usually come from the table's local state, but if we want to support them globally,
        // we need to check if they exist in the 'filters' object passed in.
        // For now, the 'filters' object passed here is mostly from the Drawer/QuickChips.
        // The Table component combines these with its own column filters.
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
                if (Array.isArray(value)) {
                    return value.some((v)=>filter.selectedValues?.includes(v));
                }
                return filter.selectedValues.includes(String(value));
            }
        });
    });
};
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
// Helper to get unique values for a column
const getUniqueValues = (data, key)=>{
    const values = new Set();
    data.forEach((item)=>{
        const val = key.split('.').reduce((o, i)=>o?.[i], item);
        if (val) values.add(String(val));
    });
    return Array.from(values).sort();
};
function StrengthTable({ stocks, isLoading }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [displayCount, setDisplayCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(50);
    // Client-side state
    const [columnFilters, setColumnFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [sortConfig, setSortConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        key: "history.avg_3_day_change_pct",
        direction: "asc" // Default: closest to zero (asc of abs value)
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
    const handleLoadMore = ()=>{
        setDisplayCount((prev)=>prev + 50);
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
            // 1. Enrich with composite indicators for filtering
            const enriched = stocks.map({
                "StrengthTable.useMemo[processedStocks].enriched": (stock)=>{
                    const indicatorsList = [];
                    if (stock.indicators.macd_status === "above_zero") indicatorsList.push("MACD Above");
                    if (stock.indicators.macd_status === "below_zero") indicatorsList.push("MACD Below");
                    if (stock.indicators.macd_status === "near_zero") indicatorsList.push("MACD Neutral");
                    if (stock.indicators.rsi_status === "overbought") indicatorsList.push("RSI Over");
                    if (stock.indicators.rsi_status === "oversold") indicatorsList.push("RSI Under");
                    if (stock.indicators.rsi_status === "neutral") indicatorsList.push("RSI Neutral");
                    return {
                        ...stock,
                        derived: {
                            indicatorsList,
                            macdLabel: stock.indicators.macd_status === "above_zero" ? "Above" : stock.indicators.macd_status === "below_zero" ? "Below" : "Neutral",
                            rsiLabel: stock.indicators.rsi_status === "overbought" ? "Over" : stock.indicators.rsi_status === "oversold" ? "Under" : "Neutral"
                        }
                    };
                }
            }["StrengthTable.useMemo[processedStocks].enriched"]);
            // 2. Apply Column Filters
            const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$globalFilter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyColumnFilters"])(enriched, columnFilters);
            // 3. Sort
            return filtered.sort({
                "StrengthTable.useMemo[processedStocks]": (a, b)=>{
                    const { key, direction } = sortConfig;
                    let valA, valB;
                    // Special case for 3-Day Avg % (Sort by ABSOLUTE value)
                    if (key === "history.avg_3_day_change_pct") {
                        valA = Math.abs(a.history.avg_3_day_change_pct);
                        valB = Math.abs(b.history.avg_3_day_change_pct);
                    } else {
                        // Generic accessor
                        valA = key.split('.').reduce({
                            "StrengthTable.useMemo[processedStocks]": (o, i)=>o?.[i]
                        }["StrengthTable.useMemo[processedStocks]"], a);
                        valB = key.split('.').reduce({
                            "StrengthTable.useMemo[processedStocks]": (o, i)=>o?.[i]
                        }["StrengthTable.useMemo[processedStocks]"], b);
                    }
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
    // Helpers for visuals
    const getPctColor = (val)=>{
        if (val > 0) return "text-green-600 dark:text-green-400";
        if (val < 0) return "text-red-600 dark:text-red-400";
        return "text-gray-400 dark:text-gray-500";
    };
    // Visual Helper Components
    const StrengthMeter = ({ label, buyerScore, sellerScore })=>{
        // If scores are provided, use them for the ratio
        // If not, infer 100% based on label
        let bScore = buyerScore;
        let sScore = sellerScore;
        if (bScore === undefined || sScore === undefined) {
            if (label === "Buyers Dominating") {
                bScore = 100;
                sScore = 0;
            } else if (label === "Sellers Dominating") {
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
                            fileName: "[project]/src/components/StrengthTable.tsx",
                            lineNumber: 150,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-red-500 dark:bg-red-400 h-full transition-all duration-300",
                            style: {
                                width: `${sScore}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/StrengthTable.tsx",
                            lineNumber: 151,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/StrengthTable.tsx",
                    lineNumber: 149,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between text-[10px] font-medium leading-none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-green-600 dark:text-green-400", bScore > sScore ? "font-bold" : "opacity-70"),
                            children: bScore > sScore ? "Buyers" : ""
                        }, void 0, false, {
                            fileName: "[project]/src/components/StrengthTable.tsx",
                            lineNumber: 154,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-red-600 dark:text-red-400", sScore > bScore ? "font-bold" : "opacity-70"),
                            children: sScore > bScore ? "Sellers" : ""
                        }, void 0, false, {
                            fileName: "[project]/src/components/StrengthTable.tsx",
                            lineNumber: 157,
                            columnNumber: 21
                        }, this),
                        bScore === sScore && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-500 dark:text-gray-400",
                            children: "Balanced"
                        }, void 0, false, {
                            fileName: "[project]/src/components/StrengthTable.tsx",
                            lineNumber: 160,
                            columnNumber: 43
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/StrengthTable.tsx",
                    lineNumber: 153,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/StrengthTable.tsx",
            lineNumber: 148,
            columnNumber: 13
        }, this);
    };
    const getOptions = (key)=>{
        if (!processedStocks.length) return [];
        if (key === "derived.indicatorsList") {
            const all = new Set();
            processedStocks.forEach((s)=>s.derived.indicatorsList.forEach((i)=>all.add(i)));
            return Array.from(all).sort();
        }
        return getUniqueValues(processedStocks, key);
    };
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-20 text-gray-500 dark:text-gray-400",
            children: "Loading analysis..."
        }, void 0, false, {
            fileName: "[project]/src/components/StrengthTable.tsx",
            lineNumber: 177,
            columnNumber: 16
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full overflow-x-auto rounded-2xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm dark:shadow-md min-h-[600px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "min-w-full table-auto border-separate border-spacing-y-1 text-sm text-left relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            className: "text-xs text-gray-600 dark:text-gray-300 uppercase bg-gray-50 dark:bg-slate-800 sticky top-0 z-20 backdrop-blur-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-3 py-2 w-40 sticky left-0 z-30 bg-gray-50 dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Symbol"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StrengthTable.tsx",
                                                    lineNumber: 189,
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
                                                    lineNumber: 190,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 188,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StrengthTable.tsx",
                                        lineNumber: 187,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-3 py-2 w-28 text-center border-b border-gray-200 dark:border-slate-700",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Chg %"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StrengthTable.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AutoFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    columnKey: "current_change_pct",
                                                    title: "Change %",
                                                    type: "number",
                                                    onFilter: (f)=>handleFilterChange("current_change_pct", f),
                                                    currentFilter: columnFilters["current_change_pct"] || null,
                                                    onSort: (d)=>handleSort("current_change_pct", d),
                                                    sortDirection: sortConfig.key === "current_change_pct" ? sortConfig.direction : null
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StrengthTable.tsx",
                                                    lineNumber: 207,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 205,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StrengthTable.tsx",
                                        lineNumber: 204,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-3 py-2 w-36 text-center border-b border-gray-200 dark:border-slate-700",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Strength"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StrengthTable.tsx",
                                                    lineNumber: 222,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AutoFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    columnKey: "current_strength",
                                                    title: "Strength",
                                                    type: "enum",
                                                    options: [
                                                        "Buyers Dominating",
                                                        "Sellers Dominating",
                                                        "Balanced"
                                                    ],
                                                    onFilter: (f)=>handleFilterChange("current_strength", f),
                                                    currentFilter: columnFilters["current_strength"] || null,
                                                    onSort: (d)=>handleSort("current_strength", d),
                                                    sortDirection: sortConfig.key === "current_strength" ? sortConfig.direction : null
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StrengthTable.tsx",
                                                    lineNumber: 223,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 221,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StrengthTable.tsx",
                                        lineNumber: 220,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-3 py-2 w-28 text-center border-b border-gray-200 dark:border-slate-700",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Day 1 %"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StrengthTable.tsx",
                                                    lineNumber: 239,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AutoFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    columnKey: "history.day_1_change_pct",
                                                    title: "Day 1 %",
                                                    type: "number",
                                                    onFilter: (f)=>handleFilterChange("history.day_1_change_pct", f),
                                                    currentFilter: columnFilters["history.day_1_change_pct"] || null,
                                                    onSort: (d)=>handleSort("history.day_1_change_pct", d),
                                                    sortDirection: sortConfig.key === "history.day_1_change_pct" ? sortConfig.direction : null
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StrengthTable.tsx",
                                                    lineNumber: 240,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 238,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StrengthTable.tsx",
                                        lineNumber: 237,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-3 py-2 w-36 text-center border-b border-gray-200 dark:border-slate-700",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "D1 Str"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StrengthTable.tsx",
                                                    lineNumber: 255,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AutoFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    columnKey: "day_1_strength",
                                                    title: "D1 Strength",
                                                    type: "enum",
                                                    options: [
                                                        "Buyers Dominating",
                                                        "Sellers Dominating",
                                                        "Balanced"
                                                    ],
                                                    onFilter: (f)=>handleFilterChange("day_1_strength", f),
                                                    currentFilter: columnFilters["day_1_strength"] || null,
                                                    onSort: (d)=>handleSort("day_1_strength", d),
                                                    sortDirection: sortConfig.key === "day_1_strength" ? sortConfig.direction : null
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StrengthTable.tsx",
                                                    lineNumber: 256,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 254,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StrengthTable.tsx",
                                        lineNumber: 253,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-3 py-2 w-28 text-center border-b border-gray-200 dark:border-slate-700",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Day 2 %"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StrengthTable.tsx",
                                                    lineNumber: 272,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AutoFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    columnKey: "history.day_2_change_pct",
                                                    title: "Day 2 %",
                                                    type: "number",
                                                    onFilter: (f)=>handleFilterChange("history.day_2_change_pct", f),
                                                    currentFilter: columnFilters["history.day_2_change_pct"] || null,
                                                    onSort: (d)=>handleSort("history.day_2_change_pct", d),
                                                    sortDirection: sortConfig.key === "history.day_2_change_pct" ? sortConfig.direction : null
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StrengthTable.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 271,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StrengthTable.tsx",
                                        lineNumber: 270,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-3 py-2 w-36 text-center border-b border-gray-200 dark:border-slate-700",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "D2 Str"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StrengthTable.tsx",
                                                    lineNumber: 288,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AutoFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    columnKey: "day_2_strength",
                                                    title: "D2 Strength",
                                                    type: "enum",
                                                    options: [
                                                        "Buyers Dominating",
                                                        "Sellers Dominating",
                                                        "Balanced"
                                                    ],
                                                    onFilter: (f)=>handleFilterChange("day_2_strength", f),
                                                    currentFilter: columnFilters["day_2_strength"] || null,
                                                    onSort: (d)=>handleSort("day_2_strength", d),
                                                    sortDirection: sortConfig.key === "day_2_strength" ? sortConfig.direction : null
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StrengthTable.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 287,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StrengthTable.tsx",
                                        lineNumber: 286,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-3 py-2 w-28 text-center border-b border-gray-200 dark:border-slate-700",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Day 3 %"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StrengthTable.tsx",
                                                    lineNumber: 305,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AutoFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    columnKey: "history.day_3_change_pct",
                                                    title: "Day 3 %",
                                                    type: "number",
                                                    onFilter: (f)=>handleFilterChange("history.day_3_change_pct", f),
                                                    currentFilter: columnFilters["history.day_3_change_pct"] || null,
                                                    onSort: (d)=>handleSort("history.day_3_change_pct", d),
                                                    sortDirection: sortConfig.key === "history.day_3_change_pct" ? sortConfig.direction : null
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StrengthTable.tsx",
                                                    lineNumber: 306,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 304,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StrengthTable.tsx",
                                        lineNumber: 303,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-3 py-2 w-36 text-center border-b border-gray-200 dark:border-slate-700",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "D3 Str"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StrengthTable.tsx",
                                                    lineNumber: 321,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AutoFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    columnKey: "day_3_strength",
                                                    title: "D3 Strength",
                                                    type: "enum",
                                                    options: [
                                                        "Buyers Dominating",
                                                        "Sellers Dominating",
                                                        "Balanced"
                                                    ],
                                                    onFilter: (f)=>handleFilterChange("day_3_strength", f),
                                                    currentFilter: columnFilters["day_3_strength"] || null,
                                                    onSort: (d)=>handleSort("day_3_strength", d),
                                                    sortDirection: sortConfig.key === "day_3_strength" ? sortConfig.direction : null
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
                                        className: "px-3 py-2 w-28 text-center border-b border-gray-200 dark:border-slate-700",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "3D Avg %"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StrengthTable.tsx",
                                                    lineNumber: 338,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AutoFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    columnKey: "history.avg_3_day_change_pct",
                                                    title: "3D Avg %",
                                                    type: "number",
                                                    onFilter: (f)=>handleFilterChange("history.avg_3_day_change_pct", f),
                                                    currentFilter: columnFilters["history.avg_3_day_change_pct"] || null,
                                                    onSort: (d)=>handleSort("history.avg_3_day_change_pct", d),
                                                    sortDirection: sortConfig.key === "history.avg_3_day_change_pct" ? sortConfig.direction : null
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
                                        className: "px-3 py-2 w-40 text-center border-b border-gray-200 dark:border-slate-700",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "3D Avg Str"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StrengthTable.tsx",
                                                    lineNumber: 354,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AutoFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    columnKey: "avg_3_day_strength",
                                                    title: "3D Avg Str",
                                                    type: "enum",
                                                    options: [
                                                        "Buyers Dominating",
                                                        "Sellers Dominating",
                                                        "Balanced"
                                                    ],
                                                    onFilter: (f)=>handleFilterChange("avg_3_day_strength", f),
                                                    currentFilter: columnFilters["avg_3_day_strength"] || null,
                                                    onSort: (d)=>handleSort("avg_3_day_strength", d),
                                                    sortDirection: sortConfig.key === "avg_3_day_strength" ? sortConfig.direction : null
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/StrengthTable.tsx",
                                                    lineNumber: 355,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 353,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StrengthTable.tsx",
                                        lineNumber: 352,
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
                                                    lineNumber: 371,
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
                                                    lineNumber: 372,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 370,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StrengthTable.tsx",
                                        lineNumber: 369,
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
                                                    lineNumber: 388,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AutoFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    columnKey: "derived.macdLabel",
                                                    title: "MACD",
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
                                                    lineNumber: 389,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 387,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StrengthTable.tsx",
                                        lineNumber: 386,
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
                                                    lineNumber: 405,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AutoFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    columnKey: "derived.rsiLabel",
                                                    title: "RSI",
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
                                                    lineNumber: 406,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 404,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StrengthTable.tsx",
                                        lineNumber: 403,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-3 py-2 w-12 text-center border-b border-gray-200 dark:border-slate-700",
                                        children: "Action"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/StrengthTable.tsx",
                                        lineNumber: 420,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/StrengthTable.tsx",
                                lineNumber: 185,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/StrengthTable.tsx",
                            lineNumber: 184,
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
                                                lineNumber: 434,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 433,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-3 py-2 whitespace-nowrap font-medium text-center", getPctColor(stock.current_change_pct)),
                                            children: [
                                                stock.current_change_pct.toFixed(2),
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 438,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-2 whitespace-nowrap text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StrengthMeter, {
                                                label: stock.current_strength,
                                                buyerScore: stock.indicators.buyer_strength_score,
                                                sellerScore: stock.indicators.seller_strength_score
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/StrengthTable.tsx",
                                                lineNumber: 444,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 443,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-3 py-2 whitespace-nowrap text-xs text-center", getPctColor(stock.history.day_1_change_pct)),
                                            children: [
                                                stock.history.day_1_change_pct.toFixed(2),
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 452,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-2 whitespace-nowrap text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StrengthMeter, {
                                                label: stock.day_1_strength
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/StrengthTable.tsx",
                                                lineNumber: 458,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 457,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-3 py-2 whitespace-nowrap text-xs text-center", getPctColor(stock.history.day_2_change_pct)),
                                            children: [
                                                stock.history.day_2_change_pct.toFixed(2),
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 462,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-2 whitespace-nowrap text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StrengthMeter, {
                                                label: stock.day_2_strength
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/StrengthTable.tsx",
                                                lineNumber: 468,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 467,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-3 py-2 whitespace-nowrap text-xs text-center", getPctColor(stock.history.day_3_change_pct)),
                                            children: [
                                                stock.history.day_3_change_pct.toFixed(2),
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 472,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-2 whitespace-nowrap text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StrengthMeter, {
                                                label: stock.day_3_strength
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/StrengthTable.tsx",
                                                lineNumber: 478,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 477,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-3 py-2 whitespace-nowrap font-medium text-center", getPctColor(stock.history.avg_3_day_change_pct)),
                                            children: [
                                                stock.history.avg_3_day_change_pct.toFixed(2),
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 482,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-2 whitespace-nowrap text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StrengthMeter, {
                                                label: stock.avg_3_day_strength
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/StrengthTable.tsx",
                                                lineNumber: 488,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 487,
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
                                                        lineNumber: 494,
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
                                                        lineNumber: 497,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/StrengthTable.tsx",
                                                lineNumber: 493,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 492,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-2 whitespace-nowrap text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-4 h-4 mx-auto", stock.derived.macdLabel === "Above" ? "text-green-500 dark:text-green-400" : stock.derived.macdLabel === "Below" ? "text-red-500 dark:text-red-400" : "text-gray-400 dark:text-gray-500")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/StrengthTable.tsx",
                                                lineNumber: 505,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 504,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-2 whitespace-nowrap text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-4 h-4 mx-auto", stock.derived.rsiLabel === "Under" ? "text-green-500 dark:text-green-400" : stock.derived.rsiLabel === "Over" ? "text-red-500 dark:text-red-400" : "text-blue-400 dark:text-blue-500")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/StrengthTable.tsx",
                                                lineNumber: 510,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 509,
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
                                                    lineNumber: 522,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/StrengthTable.tsx",
                                                lineNumber: 515,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/StrengthTable.tsx",
                                            lineNumber: 514,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, stock.symbol, true, {
                                    fileName: "[project]/src/components/StrengthTable.tsx",
                                    lineNumber: 427,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/StrengthTable.tsx",
                            lineNumber: 425,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/StrengthTable.tsx",
                    lineNumber: 183,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/StrengthTable.tsx",
                lineNumber: 182,
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
                    lineNumber: 533,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/StrengthTable.tsx",
                lineNumber: 532,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true);
}
_s(StrengthTable, "DIvEIjOqU2QSPqDI5ugFmZuEAxQ=", false, function() {
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
"[project]/src/app/strength-analyzer/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StrengthAnalyzerPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useStocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useStocks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StrengthTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/StrengthTable.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-ccw.js [app-client] (ecmascript) <export default as RefreshCcw>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function StrengthAnalyzerPage() {
    _s();
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        min_strength: "",
        trend: "",
        timeframe: "1d"
    });
    const { data: stocks, isLoading, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useStocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStrengthAnalysis"])(filters);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen w-full bg-gray-100 dark:bg-slate-900 text-gray-900 dark:text-gray-100 p-4 md:p-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1600px] mx-auto space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row justify-between items-start md:items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl font-semibold text-gray-900 dark:text-gray-100",
                                    children: "Strength Analyzer"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/strength-analyzer/page.tsx",
                                    lineNumber: 25,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-500 dark:text-gray-400 mt-1",
                                    children: "Deep dive into stock strength trends and momentum indicators"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/strength-analyzer/page.tsx",
                                    lineNumber: 28,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/strength-analyzer/page.tsx",
                            lineNumber: 24,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>refetch(),
                                className: "p-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors text-gray-600 dark:text-gray-300",
                                title: "Refresh Data",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCcw$3e$__["RefreshCcw"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/strength-analyzer/page.tsx",
                                    lineNumber: 39,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/strength-analyzer/page.tsx",
                                lineNumber: 34,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/strength-analyzer/page.tsx",
                            lineNumber: 33,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/strength-analyzer/page.tsx",
                    lineNumber: 23,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white dark:bg-slate-800 rounded-3xl shadow-sm dark:shadow-md border border-gray-200 dark:border-slate-700 p-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StrengthTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        stocks: stocks || [],
                        isLoading: isLoading
                    }, void 0, false, {
                        fileName: "[project]/src/app/strength-analyzer/page.tsx",
                        lineNumber: 46,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/strength-analyzer/page.tsx",
                    lineNumber: 45,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/strength-analyzer/page.tsx",
            lineNumber: 20,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/strength-analyzer/page.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, this);
}
_s(StrengthAnalyzerPage, "j79vATUUdeLC4Qmda31mOazVJd8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useStocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStrengthAnalysis"]
    ];
});
_c = StrengthAnalyzerPage;
var _c;
__turbopack_context__.k.register(_c, "StrengthAnalyzerPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_74a353e1._.js.map