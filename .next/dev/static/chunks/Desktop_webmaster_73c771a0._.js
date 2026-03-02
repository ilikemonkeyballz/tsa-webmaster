(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/webmaster/components/directory/SearchBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmaster/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function SearchBar({ searchTerm, setSearchTerm }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative -mt-8 z-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl shadow-lg p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-6 h-6 text-gray-400 mr-3",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/webmaster/components/directory/SearchBar.tsx",
                            lineNumber: 18,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/webmaster/components/directory/SearchBar.tsx",
                        lineNumber: 12,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Search resources by name or keyword...",
                        value: searchTerm,
                        onChange: (e)=>setSearchTerm(e.target.value),
                        className: "flex-1 outline-none text-gray-700 text-lg"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/webmaster/components/directory/SearchBar.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this),
                    searchTerm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setSearchTerm(""),
                        className: "ml-2 text-gray-400 hover:text-gray-600",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-5 h-5",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M6 18L18 6M6 6l12 12"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/webmaster/components/directory/SearchBar.tsx",
                                lineNumber: 43,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/webmaster/components/directory/SearchBar.tsx",
                            lineNumber: 37,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/webmaster/components/directory/SearchBar.tsx",
                        lineNumber: 33,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/webmaster/components/directory/SearchBar.tsx",
                lineNumber: 11,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/webmaster/components/directory/SearchBar.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/webmaster/components/directory/SearchBar.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = SearchBar;
var _c;
__turbopack_context__.k.register(_c, "SearchBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/webmaster/components/directory/FilterSidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FilterSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmaster/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function FilterSidebar({ selectedCategory, setSelectedCategory }) {
    const categories = [
        {
            name: "All Resources",
            value: "all",
            icon: "/icons/resource-allocation.png"
        },
        {
            name: "Food & Social Services",
            value: "Food & Social Services",
            icon: "/icons/restaurant.png"
        },
        {
            name: "Shelter & Housing",
            value: "Shelter & Housing",
            icon: "/icons/house.png"
        },
        {
            name: "Social Services",
            value: "Social Services",
            icon: "/icons/public-service.png"
        },
        {
            name: "Community Services",
            value: "Community Services",
            icon: "/icons/public-health.png"
        },
        {
            name: "Senior Services",
            value: "Senior Services",
            icon: "/icons/aged.png"
        },
        {
            name: "Employment Services",
            value: "Employment Services",
            icon: "/icons/job-seeker.png"
        },
        {
            name: "Volunteer Services",
            value: "Volunteer Services",
            icon: "/icons/volunteer.png"
        },
        {
            name: "Referral Services",
            value: "Referral Services",
            icon: "/icons/viber.png"
        },
        {
            name: "Domestic Violence Services",
            value: "Domestic Violence Services",
            icon: "/icons/stop-violence.png"
        },
        {
            name: "Homeless Services",
            value: "Homeless Services",
            icon: "/icons/house.png"
        },
        {
            name: "Childcare & Support",
            value: "Childcare & Support",
            icon: "/icons/baby-boy.png"
        },
        {
            name: "Disability Services",
            value: "Disability Services",
            icon: "/icons/disabled.png"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "lg:w-72 flex-shrink-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl shadow-md p-6 sticky top-24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xl font-bold text-gray-900 mb-4",
                    children: "Categories"
                }, void 0, false, {
                    fileName: "[project]/Desktop/webmaster/components/directory/FilterSidebar.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2 max-h-[calc(100vh-200px)] overflow-y-auto",
                    children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSelectedCategory(category.value),
                            className: `w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center text-sm ${selectedCategory === category.value ? "bg-[#B3D89C] text-gray-900 font-semibold" : "hover:bg-gray-100 text-gray-700"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mr-3 text-lg",
                                    children: category.icon.startsWith('/') || category.icon.startsWith('http') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: category.icon,
                                        alt: category.name,
                                        className: "w-6 h-6 object-contain"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/webmaster/components/directory/FilterSidebar.tsx",
                                        lineNumber: 41,
                                        columnNumber: 19
                                    }, this) : category.icon
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/webmaster/components/directory/FilterSidebar.tsx",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "line-clamp-1",
                                    children: category.name
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/webmaster/components/directory/FilterSidebar.tsx",
                                    lineNumber: 51,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, category.value, true, {
                            fileName: "[project]/Desktop/webmaster/components/directory/FilterSidebar.tsx",
                            lineNumber: 30,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/webmaster/components/directory/FilterSidebar.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/webmaster/components/directory/FilterSidebar.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/webmaster/components/directory/FilterSidebar.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c = FilterSidebar;
var _c;
__turbopack_context__.k.register(_c, "FilterSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/webmaster/components/directory/ResourceCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ResourceCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmaster/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmaster/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmaster/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmaster/lib/auth.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ResourceCard({ resource, reviews, setReviews }) {
    _s();
    const [isExpanded, setIsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isClickExpanded, setIsClickExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showReviewModal, setShowReviewModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newReview, setNewReview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        rating: 5,
        comment: "",
        author: ""
    });
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSubscribed, setIsSubscribed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const resourceReviews = reviews[resource.id] || [];
    const averageRating = resource.averageRating || 0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ResourceCard.useEffect": ()=>{
            const currentUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUser"])();
            setUser(currentUser);
            if (currentUser) {
                setIsSubscribed((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSubscribedTo"])(resource.id));
            }
        }
    }["ResourceCard.useEffect"], [
        resource.id
    ]);
    const handleSubmitReview = (e)=>{
        e.preventDefault();
        const review = {
            id: Date.now().toString(),
            rating: newReview.rating,
            comment: newReview.comment,
            author: newReview.author || "Anonymous",
            date: new Date().toLocaleDateString()
        };
        const updatedReviews = {
            ...reviews,
            [resource.id]: [
                ...reviews[resource.id] || [],
                review
            ]
        };
        setReviews(updatedReviews);
        localStorage.setItem('resourceReviews', JSON.stringify(updatedReviews));
        setNewReview({
            rating: 5,
            comment: "",
            author: ""
        });
        setShowReviewModal(false);
        setIsExpanded(false);
        setIsClickExpanded(false);
    };
    const handleViewDetailsClick = ()=>{
        setIsExpanded(true);
        setIsClickExpanded(true);
    };
    const handleMouseLeave = ()=>{
        // Only collapse if it was expanded by clicking AND modal is not showing
        if (isClickExpanded && !showReviewModal) {
            setIsExpanded(false);
            setIsClickExpanded(false);
        }
    };
    const handleNewsletterToggle = ()=>{
        if (!user) {
            router.push(`/login?redirect=/directory`);
            return;
        }
        if (isSubscribed) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unsubscribeFromNewsletter"])(resource.id);
            setIsSubscribed(false);
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribeToNewsletter"])(resource.id);
            setIsSubscribed(true);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 ${isExpanded ? "shadow-2xl" : "hover:shadow-lg"}`,
                onMouseLeave: handleMouseLeave,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative h-32 bg-gradient-to-br from-sage to-mint flex items-center justify-center",
                        children: resource.icon.startsWith('/') || resource.icon.startsWith('http') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: resource.icon,
                            alt: resource.name,
                            className: "w-20 h-20 object-contain"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                            lineNumber: 128,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-6xl",
                            children: resource.icon
                        }, void 0, false, {
                            fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-block bg-seafoam text-forest-dark text-xs font-semibold px-3 py-1 rounded-full mb-3",
                                children: resource.category
                            }, void 0, false, {
                                fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-gray-900 mb-2 line-clamp-2",
                                children: resource.name
                            }, void 0, false, {
                                fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this),
                            averageRating > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center",
                                        children: [
                                            ...Array(5)
                                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: `w-4 h-4 ${i < Math.round(averageRating) ? 'text-yellow-500' : 'text-gray-300'}`,
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 21
                                                }, this)
                                            }, i, false, {
                                                fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                                lineNumber: 155,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                        lineNumber: 153,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-semibold text-neutral-dark",
                                        children: averageRating.toFixed(1)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                        lineNumber: 167,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-neutral-medium",
                                        children: [
                                            "(",
                                            resource.reviewCount,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                        lineNumber: 170,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                lineNumber: 152,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-forest-medium font-medium mb-2",
                                children: [
                                    "📍 ",
                                    resource.town
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 text-sm mb-4 line-clamp-2",
                                children: resource.description
                            }, void 0, false, {
                                fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this),
                            !isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleViewDetailsClick,
                                className: "w-full bg-mint-bg hover:bg-seafoam text-forest-dark font-semibold py-2 px-4 rounded-lg transition-colors mb-3 flex items-center justify-center gap-2",
                                children: [
                                    "View Details",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-4 h-4",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M19 9l-7 7-7-7"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                            lineNumber: 199,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                        lineNumber: 193,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                lineNumber: 188,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `transition-all duration-300 overflow-hidden ${isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-t border-gray-200 pt-4 space-y-3 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-semibold text-gray-900 mb-1",
                                                    children: "📞 Contact"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-700",
                                                    children: resource.phone
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                                    lineNumber: 213,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                            lineNumber: 211,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-semibold text-gray-900 mb-1",
                                                    children: "🕒 Hours"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-700",
                                                    children: resource.hours
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                                    lineNumber: 218,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                            lineNumber: 216,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-semibold text-gray-900 mb-1",
                                                    children: "✅ Eligibility"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                                    lineNumber: 222,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-700",
                                                    children: resource.eligibility
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                                    lineNumber: 223,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                            lineNumber: 221,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-semibold text-gray-900 mb-1",
                                                    children: "💰 Fees"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                                    lineNumber: 227,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-700",
                                                    children: resource.fees
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                            lineNumber: 226,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2 pt-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: (e)=>{
                                                        e.stopPropagation();
                                                        setShowReviewModal(true);
                                                    },
                                                    className: "flex-1 bg-sage hover:bg-forest-medium text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm",
                                                    children: "⭐ Leave Review"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 17
                                                }, this),
                                                resource.website !== "Contact for information" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: resource.website,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "flex-1 bg-mint-bg hover:bg-seafoam text-forest-dark font-semibold py-2 px-4 rounded-lg transition-colors text-sm text-center",
                                                    onClick: (e)=>e.stopPropagation(),
                                                    children: "Visit Website"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                                    lineNumber: 243,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                            lineNumber: 232,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pt-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleNewsletterToggle,
                                                    className: `w-full font-semibold py-2 px-4 rounded-lg transition-all text-sm flex items-center justify-center gap-2 ${isSubscribed ? "bg-sage text-white hover:bg-forest-medium" : "bg-mint-bg text-forest-dark hover:bg-seafoam border border-sage/30"}`,
                                                    children: isSubscribed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "w-4 h-4",
                                                                fill: "currentColor",
                                                                viewBox: "0 0 20 20",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                                                        lineNumber: 268,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                                                        lineNumber: 269,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                                                lineNumber: 267,
                                                                columnNumber: 23
                                                            }, this),
                                                            "✓ Subscribed to Newsletter"
                                                        ]
                                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "w-4 h-4",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                viewBox: "0 0 24 24",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                                                    lineNumber: 276,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                                                lineNumber: 275,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Subscribe to Newsletter"
                                                        ]
                                                    }, void 0, true)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                                    lineNumber: 257,
                                                    columnNumber: 17
                                                }, this),
                                                !user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-neutral-medium text-center mt-2",
                                                    children: "Sign in to subscribe to newsletters"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                                    lineNumber: 283,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                            lineNumber: 256,
                                            columnNumber: 15
                                        }, this),
                                        resourceReviews.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pt-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-forest-dark font-medium text-sm",
                                                    children: [
                                                        resourceReviews.length,
                                                        " review",
                                                        resourceReviews.length !== 1 ? 's' : '',
                                                        " from the community"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                                    lineNumber: 292,
                                                    columnNumber: 19
                                                }, this),
                                                resourceReviews.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-3 bg-mint-bg/50 rounded-lg p-3 border border-sage/20",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center",
                                                                    children: [
                                                                        ...Array(5)
                                                                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            className: `w-3 h-3 ${i < resourceReviews[resourceReviews.length - 1].rating ? 'text-yellow-500' : 'text-gray-300'}`,
                                                                            fill: "currentColor",
                                                                            viewBox: "0 0 20 20",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                                                                lineNumber: 310,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, i, false, {
                                                                            fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                                                            lineNumber: 302,
                                                                            columnNumber: 29
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                                                    lineNumber: 300,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs font-semibold text-neutral-dark",
                                                                    children: resourceReviews[resourceReviews.length - 1].author
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                                                    lineNumber: 314,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-neutral-medium",
                                                                    children: resourceReviews[resourceReviews.length - 1].date
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                                                    lineNumber: 317,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                                            lineNumber: 299,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-neutral-dark line-clamp-2",
                                                            children: [
                                                                '"',
                                                                resourceReviews[resourceReviews.length - 1].comment,
                                                                '"'
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                                            lineNumber: 321,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                                    lineNumber: 298,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                            lineNumber: 291,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                    lineNumber: 210,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            showReviewModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",
                onClick: ()=>setShowReviewModal(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-2xl font-bold text-neutral-dark",
                                    children: "Leave a Review"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                    lineNumber: 344,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowReviewModal(false),
                                    className: "text-neutral-medium hover:text-neutral-dark text-2xl",
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                    lineNumber: 345,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                            lineNumber: 343,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-neutral-medium mb-6",
                            children: resource.name
                        }, void 0, false, {
                            fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                            lineNumber: 353,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmitReview,
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-neutral-dark mb-3",
                                            children: "Rating"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                            lineNumber: 358,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-1 justify-start",
                                            children: [
                                                1,
                                                2,
                                                3,
                                                4,
                                                5
                                            ].map((star)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setNewReview({
                                                            ...newReview,
                                                            rating: star
                                                        }),
                                                    className: "focus:outline-none transition-transform hover:scale-110",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: `w-9 h-9 ${star <= newReview.rating ? 'text-yellow-500' : 'text-gray-300'}`,
                                                        fill: "currentColor",
                                                        viewBox: "0 0 20 20",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                                            lineNumber: 376,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                                        lineNumber: 369,
                                                        columnNumber: 23
                                                    }, this)
                                                }, star, false, {
                                                    fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                                    lineNumber: 363,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                            lineNumber: 361,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                    lineNumber: 357,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-neutral-dark mb-2",
                                            children: "Your Review"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                            lineNumber: 385,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: newReview.comment,
                                            onChange: (e)=>setNewReview({
                                                    ...newReview,
                                                    comment: e.target.value
                                                }),
                                            className: "w-full px-4 py-3 border border-neutral-light/30 rounded-lg focus:border-forest-medium focus:ring-2 focus:ring-forest-medium/20 outline-none resize-none",
                                            rows: 4,
                                            placeholder: "Share your experience with this resource...",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                            lineNumber: 388,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                    lineNumber: 384,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-neutral-dark mb-2",
                                            children: "Your Name (Optional)"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                            lineNumber: 400,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: newReview.author,
                                            onChange: (e)=>setNewReview({
                                                    ...newReview,
                                                    author: e.target.value
                                                }),
                                            className: "w-full px-4 py-3 border border-neutral-light/30 rounded-lg focus:border-forest-medium focus:ring-2 focus:ring-forest-medium/20 outline-none",
                                            placeholder: "Anonymous"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                            lineNumber: 403,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                    lineNumber: 399,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "w-full bg-forest-medium hover:bg-forest-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors",
                                    children: "Submit Review"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                                    lineNumber: 413,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                            lineNumber: 355,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                    lineNumber: 339,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/webmaster/components/directory/ResourceCard.tsx",
                lineNumber: 335,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(ResourceCard, "bFm/XbajL+UMWwE+GmMcaoxh47k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ResourceCard;
var _c;
__turbopack_context__.k.register(_c, "ResourceCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/webmaster/app/directory/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DirectoryPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmaster/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmaster/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$components$2f$directory$2f$SearchBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmaster/components/directory/SearchBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$components$2f$directory$2f$FilterSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmaster/components/directory/FilterSidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$components$2f$directory$2f$ResourceCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmaster/components/directory/ResourceCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmaster/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const RESET_LEADERBOARD = false;
function DirectoryPage() {
    _s();
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [reviews, setReviews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DirectoryPage.useEffect": ()=>{
            setIsVisible(true);
            // Load reviews from localStorage
            const savedReviews = localStorage.getItem('resourceReviews');
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            if (savedReviews) {
                setReviews(JSON.parse(savedReviews));
            }
        }
    }["DirectoryPage.useEffect"], []);
    // Calculate average rating for a resource
    const getAverageRating = (resourceId)=>{
        const resourceReviews = reviews[resourceId] || [];
        if (resourceReviews.length === 0) return 0;
        const sum = resourceReviews.reduce((acc, review)=>acc + review.rating, 0);
        return sum / resourceReviews.length;
    };
    // Real Bergen County resources
    const resources = [
        {
            id: 1,
            name: "Center for Food Action (CFA)",
            category: "Food & Social Services",
            description: "Food pantry, rental & utility assistance, case management",
            town: "Hackensack / Paramus",
            address: "Multiple pantry sites across Bergen County",
            phone: "Contact via website",
            website: "https://www.centerforfoodaction.org",
            hours: "Verify locations and hours online",
            eligibility: "Low-income households",
            fees: "Free",
            icon: "/icons/open-graph-new-image-1-removebg-preview.png"
        },
        {
            id: 2,
            name: "Family Promise of Bergen County",
            category: "Shelter & Housing",
            description: "Emergency shelter for families, case management, rapid rehousing",
            town: "Ridgewood area (countywide)",
            address: "Rotational congregational shelter model",
            phone: "Contact via website",
            website: "https://familypromisebc.org",
            hours: "Confirm current operations online",
            eligibility: "Families experiencing homelessness",
            fees: "Usually free",
            icon: "/icons/familypromise-removebg-preview.png"
        },
        {
            id: 3,
            name: "Greater Bergen Community Action (GBCA)",
            category: "Community Services",
            description: "Rental assistance, Head Start, workforce programs, weatherization",
            town: "Hackensack",
            address: "Countywide community action agency",
            phone: "Contact via website",
            website: "https://www.gbcaheadstart.org/",
            hours: "Check website for hours",
            eligibility: "Low-income households",
            fees: "Often free/subsidized",
            icon: "🏘️"
        },
        {
            id: 4,
            name: "Bergen Volunteers",
            category: "Volunteer Services",
            description: "Friendly visiting, mentoring, caregiver respite, volunteer placement",
            town: "Ridgewood / Countywide",
            address: "Countywide volunteer organization",
            phone: "Contact via website",
            website: "https://bergenvolunteers.org",
            hours: "Contact for availability",
            eligibility: "Older adults, homebound, volunteers",
            fees: "Free",
            icon: "🤝"
        },
        {
            id: 5,
            name: "Jewish Family & Children's Services (JFCS)",
            category: "Social Services",
            description: "Counseling, homecare, social services, elder support",
            town: "Teaneck / Paramus",
            address: "Multiple office locations",
            phone: "Contact via website",
            website: "https://www.jfcsonline.org",
            hours: "By appointment",
            eligibility: "Community members",
            fees: "Sliding scale / insurance",
            icon: "💙"
        },
        {
            id: 6,
            name: "Meals on Wheels of North Jersey",
            category: "Senior Services",
            description: "Home-delivered meals for homebound seniors",
            town: "Countywide",
            address: "Meal delivery across multiple counties",
            phone: "Contact via website",
            website: "https://www.mealsonwheelsnj.org",
            hours: "Daily deliveries",
            eligibility: "Homebound seniors",
            fees: "Suggested donation",
            icon: "🍱"
        },
        {
            id: 7,
            name: "Habitat for Humanity - Bergen & Passaic",
            category: "Housing",
            description: "Affordable home building, repairs, homeowner support",
            town: "Regional",
            address: "Bergen & Passaic counties",
            phone: "Contact via website",
            website: "https://www.habitatbp.org",
            hours: "Check website",
            eligibility: "Low-income qualifying families",
            fees: "Affordable mortgage models",
            icon: "🔨"
        },
        {
            id: 8,
            name: "United Way of Northern New Jersey",
            category: "Referral Services",
            description: "Community initiatives, 211 referrals, fundraising",
            town: "Regional (serves Bergen)",
            address: "Serves northern NJ",
            phone: "Dial 211",
            website: "https://unitedwaynnj.org",
            hours: "211 available 24/7",
            eligibility: "Community-wide",
            fees: "Varies by program",
            icon: "📞"
        },
        {
            id: 9,
            name: "Center for Hope & Safety",
            category: "Domestic Violence Services",
            description: "Crisis shelter, advocacy, legal support",
            town: "Countywide",
            address: "Confidential locations",
            phone: "Crisis hotline available",
            website: "Contact for information",
            hours: "24/7 crisis line",
            eligibility: "Survivors of domestic violence",
            fees: "Free",
            icon: "🛡️"
        },
        {
            id: 10,
            name: "Eva's Village",
            category: "Homeless Services",
            description: "Shelter, meals, job training, counseling",
            town: "Paterson (serves region)",
            address: "Paterson, NJ",
            phone: "Contact via website",
            website: "https://www.evasvillage.org",
            hours: "Check website",
            eligibility: "People experiencing homelessness",
            fees: "Often free",
            icon: "🏚️"
        },
        {
            id: 11,
            name: "St. Cecilia's Food Pantry",
            category: "Food & Social Services",
            description: "Food distribution to local residents",
            town: "Englewood",
            address: "Englewood, NJ",
            phone: "Contact church office",
            website: "Contact for information",
            hours: "Verify hours with church",
            eligibility: "Residents of Englewood area",
            fees: "Free",
            icon: "🍞"
        },
        {
            id: 12,
            name: "Ridgewood Fish Food Pantry",
            category: "Food & Social Services",
            description: "Emergency food assistance",
            town: "Ridgewood",
            address: "Ridgewood, NJ",
            phone: "Contact for information",
            website: "Contact for information",
            hours: "Confirm schedule",
            eligibility: "Local residents",
            fees: "Free",
            icon: "🥫"
        },
        {
            id: 13,
            name: "Social Service Association of Ridgewood",
            category: "Social Services",
            description: "Emergency assistance, food pantry, casework",
            town: "Ridgewood",
            address: "Ridgewood and vicinity",
            phone: "Contact for information",
            website: "Contact for information",
            hours: "Check for hours",
            eligibility: "Local residents",
            fees: "Free or sliding scale",
            icon: "🤲"
        },
        {
            id: 14,
            name: "Oasis – A Haven for Women & Children",
            category: "Shelter & Housing",
            description: "Shelter and services for women and children",
            town: "Regional",
            address: "Regional services",
            phone: "Contact for information",
            website: "Contact for information",
            hours: "24/7 services",
            eligibility: "Survivors and at-risk families",
            fees: "Free",
            icon: "🌸"
        },
        {
            id: 15,
            name: "Goodwill NY/NJ",
            category: "Employment Services",
            description: "Job training, employment placement, career services",
            town: "Paramus / Multiple",
            address: "Multiple locations",
            phone: "Contact via website",
            website: "https://www.goodwillnynj.org",
            hours: "Varies by location",
            eligibility: "Job seekers",
            fees: "Often free",
            icon: "💼"
        },
        {
            id: 16,
            name: "YWCA Northern NJ",
            category: "Childcare & Support",
            description: "Childcare, domestic violence services, youth programs",
            town: "Hackensack / Multiple",
            address: "Multiple program locations",
            phone: "Contact via website",
            website: "https://www.ywcanorthernnj.org",
            hours: "Verify sites online",
            eligibility: "Women, families, children",
            fees: "Varies by program",
            icon: "👶"
        },
        {
            id: 17,
            name: "Cerebral Palsy of NJ",
            category: "Disability Services",
            description: "Services for individuals with CP and disabilities",
            town: "Regional",
            address: "Regional programs",
            phone: "Contact via website",
            website: "https://www.cpnj.org",
            hours: "Contact for services",
            eligibility: "People with disabilities",
            fees: "Varies by program",
            icon: "♿"
        },
        {
            id: 18,
            name: "Habitat ReStore",
            category: "Volunteer Services",
            description: "Retail resale to fund builds, volunteer opportunities",
            town: "Regional",
            address: "Check local affiliate",
            phone: "Contact via website",
            website: "https://www.habitat.org/restores",
            hours: "Store hours vary",
            eligibility: "Public shoppers & volunteers",
            fees: "Retail prices",
            icon: "🛠️"
        }
    ];
    // Add ratings to resources
    const resourcesWithRatings = resources.map((resource)=>({
            ...resource,
            averageRating: getAverageRating(resource.id),
            reviewCount: (reviews[resource.id] || []).length
        }));
    // Filter resources
    const filteredResources = resourcesWithRatings.filter((resource)=>{
        const matchesSearch = resource.name.toLowerCase().includes(searchTerm.toLowerCase()) || resource.description.toLowerCase().includes(searchTerm.toLowerCase()) || resource.town.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "all" || resource.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });
    // Get top rated resources for leaderboard
    const topRatedResources = [
        ...resourcesWithRatings
    ].filter((r)=>r.reviewCount > 0).sort((a, b)=>{
        if (b.averageRating !== a.averageRating) {
            return b.averageRating - a.averageRating;
        }
        return b.reviewCount - a.reviewCount;
    }).slice(0, 10);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-beige",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `bg-gradient-to-r from-forest-dark to-forest-medium text-white py-16 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-5xl font-bold mb-4",
                            children: "Bergen County Resources"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/webmaster/app/directory/page.tsx",
                            lineNumber: 332,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl text-mint",
                            children: "Discover local services and support programs in your community"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/webmaster/app/directory/page.tsx",
                            lineNumber: 333,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/webmaster/app/directory/page.tsx",
                    lineNumber: 331,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/webmaster/app/directory/page.tsx",
                lineNumber: 330,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `section-container transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$components$2f$directory$2f$SearchBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    searchTerm: searchTerm,
                    setSearchTerm: setSearchTerm
                }, void 0, false, {
                    fileName: "[project]/Desktop/webmaster/app/directory/page.tsx",
                    lineNumber: 341,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/webmaster/app/directory/page.tsx",
                lineNumber: 340,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col lg:flex-row gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$components$2f$directory$2f$FilterSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                selectedCategory: selectedCategory,
                                setSelectedCategory: setSelectedCategory
                            }, void 0, false, {
                                fileName: "[project]/Desktop/webmaster/app/directory/page.tsx",
                                lineNumber: 349,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/webmaster/app/directory/page.tsx",
                            lineNumber: 348,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `mb-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-neutral-medium",
                                        children: [
                                            "Showing ",
                                            filteredResources.length,
                                            " of ",
                                            resources.length,
                                            " ",
                                            "resources"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/webmaster/app/directory/page.tsx",
                                        lineNumber: 358,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/webmaster/app/directory/page.tsx",
                                    lineNumber: 357,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6",
                                    children: filteredResources.map((resource, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`,
                                            style: {
                                                transitionDelay: `${500 + index * 50}ms`
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$components$2f$directory$2f$ResourceCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                resource: resource,
                                                reviews: reviews,
                                                setReviews: setReviews
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/webmaster/app/directory/page.tsx",
                                                lineNumber: 373,
                                                columnNumber: 19
                                            }, this)
                                        }, resource.id, false, {
                                            fileName: "[project]/Desktop/webmaster/app/directory/page.tsx",
                                            lineNumber: 366,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/webmaster/app/directory/page.tsx",
                                    lineNumber: 364,
                                    columnNumber: 13
                                }, this),
                                filteredResources.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-12",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xl text-neutral-medium",
                                        children: "No resources found. Try adjusting your filters."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/webmaster/app/directory/page.tsx",
                                        lineNumber: 380,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/webmaster/app/directory/page.tsx",
                                    lineNumber: 379,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/webmaster/app/directory/page.tsx",
                            lineNumber: 356,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/webmaster/app/directory/page.tsx",
                    lineNumber: 346,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/webmaster/app/directory/page.tsx",
                lineNumber: 345,
                columnNumber: 7
            }, this),
            topRatedResources.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-container bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-3xl md:text-4xl font-bold text-neutral-dark mb-2",
                                            children: "🏆 Top Rated Resources"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/webmaster/app/directory/page.tsx",
                                            lineNumber: 395,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg text-neutral-medium",
                                            children: "Highly recommended by our community"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/webmaster/app/directory/page.tsx",
                                            lineNumber: 396,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/webmaster/app/directory/page.tsx",
                                    lineNumber: 394,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/leaderboard",
                                    className: "hidden md:inline-flex items-center text-forest-dark font-semibold hover:text-sage transition-colors",
                                    children: [
                                        "View Full Leaderboard",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4 ml-2",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M9 5l7 7-7 7"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/webmaster/app/directory/page.tsx",
                                                lineNumber: 404,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/webmaster/app/directory/page.tsx",
                                            lineNumber: 403,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/webmaster/app/directory/page.tsx",
                                    lineNumber: 398,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/webmaster/app/directory/page.tsx",
                            lineNumber: 393,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                            children: topRatedResources.slice(0, 6).map((resource, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-mint-bg border border-sage/20 rounded-xl p-6 hover:shadow-lg transition-all duration-300",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold text-white ${index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : index === 2 ? 'bg-orange-600' : 'bg-sage'}`,
                                                    children: index + 1
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/webmaster/app/directory/page.tsx",
                                                    lineNumber: 417,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/webmaster/app/directory/page.tsx",
                                                lineNumber: 416,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-bold text-neutral-dark mb-2",
                                                        children: resource.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/webmaster/app/directory/page.tsx",
                                                        lineNumber: 427,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center",
                                                                children: [
                                                                    ...Array(5)
                                                                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        className: `w-4 h-4 ${i < Math.round(resource.averageRating) ? 'text-yellow-500' : 'text-gray-300'}`,
                                                                        fill: "currentColor",
                                                                        viewBox: "0 0 20 20",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/webmaster/app/directory/page.tsx",
                                                                            lineNumber: 439,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, i, false, {
                                                                        fileName: "[project]/Desktop/webmaster/app/directory/page.tsx",
                                                                        lineNumber: 431,
                                                                        columnNumber: 29
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/webmaster/app/directory/page.tsx",
                                                                lineNumber: 429,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-semibold text-neutral-dark",
                                                                children: resource.averageRating.toFixed(1)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/webmaster/app/directory/page.tsx",
                                                                lineNumber: 443,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm text-neutral-medium",
                                                                children: [
                                                                    "(",
                                                                    resource.reviewCount,
                                                                    " ",
                                                                    resource.reviewCount === 1 ? 'review' : 'reviews',
                                                                    ")"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/webmaster/app/directory/page.tsx",
                                                                lineNumber: 446,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/webmaster/app/directory/page.tsx",
                                                        lineNumber: 428,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-neutral-medium mb-2",
                                                        children: resource.town
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/webmaster/app/directory/page.tsx",
                                                        lineNumber: 450,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-block bg-white px-2 py-1 rounded text-xs font-medium text-forest-dark",
                                                        children: resource.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/webmaster/app/directory/page.tsx",
                                                        lineNumber: 451,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/webmaster/app/directory/page.tsx",
                                                lineNumber: 426,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/webmaster/app/directory/page.tsx",
                                        lineNumber: 415,
                                        columnNumber: 19
                                    }, this)
                                }, resource.id, false, {
                                    fileName: "[project]/Desktop/webmaster/app/directory/page.tsx",
                                    lineNumber: 411,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/webmaster/app/directory/page.tsx",
                            lineNumber: 409,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8 text-center md:hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/leaderboard",
                                className: "inline-flex items-center text-forest-dark font-semibold hover:text-sage transition-colors",
                                children: [
                                    "View Full Leaderboard",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-4 h-4 ml-2",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M9 5l7 7-7 7"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/webmaster/app/directory/page.tsx",
                                            lineNumber: 467,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/webmaster/app/directory/page.tsx",
                                        lineNumber: 466,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/webmaster/app/directory/page.tsx",
                                lineNumber: 461,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/webmaster/app/directory/page.tsx",
                            lineNumber: 460,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/webmaster/app/directory/page.tsx",
                    lineNumber: 392,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/webmaster/app/directory/page.tsx",
                lineNumber: 391,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/webmaster/app/directory/page.tsx",
        lineNumber: 328,
        columnNumber: 5
    }, this);
}
_s(DirectoryPage, "bc6msXgnR0iEZufhlDDnDbgzihQ=");
_c = DirectoryPage;
var _c;
__turbopack_context__.k.register(_c, "DirectoryPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_webmaster_73c771a0._.js.map