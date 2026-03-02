module.exports = [
"[project]/Desktop/webmaster/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DirectoryPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmaster/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmaster/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/directory/SearchBar'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/directory/FilterSidebar'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/directory/ResourceCard'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
;
;
;
function DirectoryPage() {
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
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
            icon: "🍽️"
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
            icon: "🏠"
        },
        {
            id: 3,
            name: "Greater Bergen Community Action (GBCA)",
            category: "Community Services",
            description: "Rental assistance, Head Start, workforce programs, weatherization",
            town: "Hackensack",
            address: "Countywide community action agency",
            phone: "Contact via website",
            website: "https://www.gbca-ctc.org",
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
    // Filter resources
    const filteredResources = resources.filter((resource)=>{
        const matchesSearch = resource.name.toLowerCase().includes(searchTerm.toLowerCase()) || resource.description.toLowerCase().includes(searchTerm.toLowerCase()) || resource.town.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "all" || resource.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-r from-[#4D7298] to-[#77A6B6] text-white py-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-5xl font-bold mb-4",
                            children: "Bergen County Resources"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/webmaster/app/page.tsx",
                            lineNumber: 284,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl",
                            children: "Discover local services and support programs in your community"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/webmaster/app/page.tsx",
                            lineNumber: 285,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/webmaster/app/page.tsx",
                    lineNumber: 283,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/webmaster/app/page.tsx",
                lineNumber: 282,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SearchBar, {
                    searchTerm: searchTerm,
                    setSearchTerm: setSearchTerm
                }, void 0, false, {
                    fileName: "[project]/Desktop/webmaster/app/page.tsx",
                    lineNumber: 293,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/webmaster/app/page.tsx",
                lineNumber: 292,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col lg:flex-row gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterSidebar, {
                            selectedCategory: selectedCategory,
                            setSelectedCategory: setSelectedCategory
                        }, void 0, false, {
                            fileName: "[project]/Desktop/webmaster/app/page.tsx",
                            lineNumber: 300,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600",
                                        children: [
                                            "Showing ",
                                            filteredResources.length,
                                            " of ",
                                            resources.length,
                                            " ",
                                            "resources"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/webmaster/app/page.tsx",
                                        lineNumber: 308,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/webmaster/app/page.tsx",
                                    lineNumber: 307,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6",
                                    children: filteredResources.map((resource)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ResourceCard, {
                                            resource: resource
                                        }, resource.id, false, {
                                            fileName: "[project]/Desktop/webmaster/app/page.tsx",
                                            lineNumber: 316,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/webmaster/app/page.tsx",
                                    lineNumber: 314,
                                    columnNumber: 13
                                }, this),
                                filteredResources.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-12",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xl text-gray-500",
                                        children: "No resources found. Try adjusting your filters."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/webmaster/app/page.tsx",
                                        lineNumber: 322,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/webmaster/app/page.tsx",
                                    lineNumber: 321,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/webmaster/app/page.tsx",
                            lineNumber: 306,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/webmaster/app/page.tsx",
                    lineNumber: 298,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/webmaster/app/page.tsx",
                lineNumber: 297,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/webmaster/app/page.tsx",
        lineNumber: 280,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Desktop_webmaster_app_page_tsx_7b4a35cf._.js.map