(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/webmaster/app/my-calendar/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MyCalendarPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmaster/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmaster/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/webmaster/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function MyCalendarPage() {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [myCalendarEvents, setMyCalendarEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MyCalendarPage.useEffect": ()=>{
            setIsVisible(true);
            const saved = localStorage.getItem('myCalendarEvents');
            if (saved) {
                setMyCalendarEvents(JSON.parse(saved));
            }
        }
    }["MyCalendarPage.useEffect"], []);
    const removeFromMyCalendar = (eventId)=>{
        const updated = myCalendarEvents.filter((id)=>id !== eventId);
        setMyCalendarEvents(updated);
        localStorage.setItem('myCalendarEvents', JSON.stringify(updated));
    };
    const clearAllEvents = ()=>{
        if (confirm('Are you sure you want to remove all events from your calendar?')) {
            setMyCalendarEvents([]);
            localStorage.setItem('myCalendarEvents', JSON.stringify([]));
        }
    };
    // All events (same as in calendar page)
    const allEvents = [
        {
            id: 1,
            title: "Community Health Fair",
            date: new Date(2026, 0, 15),
            time: "10:00 AM - 3:00 PM",
            category: "healthcare",
            organizer: "Bergen Medical Center",
            location: "Bergen Community Center",
            description: "Free health screenings and vaccinations",
            color: "bg-ocean-light"
        },
        {
            id: 2,
            title: "Free Dental Clinic",
            date: new Date(2026, 0, 18),
            time: "8:00 AM - 4:00 PM",
            category: "healthcare",
            organizer: "Bergen Medical Center",
            location: "Hackensack Medical Plaza",
            description: "Complimentary dental checkups and cleanings",
            color: "bg-ocean-light"
        },
        {
            id: 3,
            title: "Mental Health Support Group",
            date: new Date(2026, 0, 20),
            time: "6:30 PM - 8:00 PM",
            category: "healthcare",
            organizer: "Bergen Medical Center",
            location: "Community Wellness Center",
            description: "Open support group with licensed counselors",
            color: "bg-ocean-light"
        },
        {
            id: 4,
            title: "Job Skills Workshop",
            date: new Date(2026, 0, 22),
            time: "6:00 PM - 8:00 PM",
            category: "employment",
            organizer: "Greater Bergen Community Action",
            location: "Adult Learning Center",
            description: "Resume building and interview prep",
            color: "bg-forest-medium"
        },
        {
            id: 5,
            title: "Community Meal Program",
            date: new Date(2026, 0, 25),
            time: "5:00 PM - 7:00 PM",
            category: "food",
            organizer: "Center for Food Action",
            location: "Bergen Community Kitchen",
            description: "Free hot meals for community members",
            color: "bg-sage"
        },
        {
            id: 6,
            title: "Food Distribution Day",
            date: new Date(2026, 0, 28),
            time: "9:00 AM - 12:00 PM",
            category: "food",
            organizer: "Center for Food Action",
            location: "Community Food Bank",
            description: "Monthly food distribution for families",
            color: "bg-sage"
        },
        {
            id: 7,
            title: "Career Fair & Job Expo",
            date: new Date(2026, 1, 5),
            time: "10:00 AM - 3:00 PM",
            category: "employment",
            organizer: "Greater Bergen Community Action",
            location: "Bergen County Convention Center",
            description: "Meet with 50+ employers",
            color: "bg-forest-medium"
        },
        {
            id: 8,
            title: "Senior Flu Shot Clinic",
            date: new Date(2026, 1, 8),
            time: "9:00 AM - 1:00 PM",
            category: "healthcare",
            organizer: "Bergen Medical Center",
            location: "Senior Center of Bergen County",
            description: "Free flu vaccinations for seniors 65+",
            color: "bg-ocean-light"
        },
        {
            id: 9,
            title: "Housing Resource Fair",
            date: new Date(2026, 1, 12),
            time: "1:00 PM - 5:00 PM",
            category: "housing",
            organizer: "Greater Bergen Community Action",
            location: "Hackensack Community Center",
            description: "Learn about affordable housing options",
            color: "bg-ocean-dark"
        },
        {
            id: 10,
            title: "Adult Education Open House",
            date: new Date(2026, 1, 15),
            time: "10:00 AM - 2:00 PM",
            category: "education",
            organizer: "Greater Bergen Community Action",
            location: "Adult Learning Center",
            description: "Explore GED and ESL programs",
            color: "bg-forest-light"
        }
    ];
    const savedEvents = allEvents.filter((event)=>myCalendarEvents.includes(event.id)).sort((a, b)=>a.date.getTime() - b.date.getTime());
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-beige",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `bg-gradient-to-r from-forest-dark to-forest-medium text-white py-16 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-5xl font-bold mb-4",
                                        children: "My Calendar"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/webmaster/app/my-calendar/page.tsx",
                                        lineNumber: 156,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xl text-mint",
                                        children: "Your personalized collection of community events"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/webmaster/app/my-calendar/page.tsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/webmaster/app/my-calendar/page.tsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, this),
                            savedEvents.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: clearAllEvents,
                                className: "bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition-all duration-300 font-semibold",
                                children: "Clear All"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/webmaster/app/my-calendar/page.tsx",
                                lineNumber: 162,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/webmaster/app/my-calendar/page.tsx",
                        lineNumber: 154,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/webmaster/app/my-calendar/page.tsx",
                    lineNumber: 153,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/webmaster/app/my-calendar/page.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-container",
                children: savedEvents.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `bg-white rounded-2xl shadow-lg p-12 text-center transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-6xl mb-6",
                            children: "📅"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/webmaster/app/my-calendar/page.tsx",
                            lineNumber: 176,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold text-neutral-dark mb-4",
                            children: "No Events Saved Yet"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/webmaster/app/my-calendar/page.tsx",
                            lineNumber: 177,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-neutral-medium mb-8 max-w-2xl mx-auto",
                            children: 'Start building your personalized calendar by adding events from the Events Calendar page. Simply hover over any event and click "Add to My Calendar".'
                        }, void 0, false, {
                            fileName: "[project]/Desktop/webmaster/app/my-calendar/page.tsx",
                            lineNumber: 178,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/calendar",
                            className: "inline-block bg-forest-medium hover:bg-forest-dark text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105",
                            children: "Browse Events Calendar"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/webmaster/app/my-calendar/page.tsx",
                            lineNumber: 181,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/webmaster/app/my-calendar/page.tsx",
                    lineNumber: 175,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-xl p-6 shadow-md border border-neutral-light/20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-3xl font-bold text-forest-dark mb-1",
                                            children: savedEvents.length
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/webmaster/app/my-calendar/page.tsx",
                                            lineNumber: 193,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-neutral-medium",
                                            children: "Total Events Saved"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/webmaster/app/my-calendar/page.tsx",
                                            lineNumber: 194,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/webmaster/app/my-calendar/page.tsx",
                                    lineNumber: 192,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-xl p-6 shadow-md border border-neutral-light/20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-3xl font-bold text-ocean-light mb-1",
                                            children: savedEvents.filter((e)=>e.date >= new Date()).length
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/webmaster/app/my-calendar/page.tsx",
                                            lineNumber: 197,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-neutral-medium",
                                            children: "Upcoming Events"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/webmaster/app/my-calendar/page.tsx",
                                            lineNumber: 200,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/webmaster/app/my-calendar/page.tsx",
                                    lineNumber: 196,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-xl p-6 shadow-md border border-neutral-light/20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-3xl font-bold text-sage mb-1",
                                            children: new Set(savedEvents.map((e)=>e.category)).size
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/webmaster/app/my-calendar/page.tsx",
                                            lineNumber: 203,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-neutral-medium",
                                            children: "Categories"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/webmaster/app/my-calendar/page.tsx",
                                            lineNumber: 206,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/webmaster/app/my-calendar/page.tsx",
                                    lineNumber: 202,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/webmaster/app/my-calendar/page.tsx",
                            lineNumber: 191,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `space-y-4 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`,
                            children: savedEvents.map((event, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-xl p-6 shadow-md border border-neutral-light/20 hover:shadow-lg transition-all duration-300",
                                    style: {
                                        transitionDelay: `${index * 50}ms`
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col md:flex-row md:items-center md:justify-between gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3 mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `${event.color} text-white px-3 py-1 rounded-full text-sm font-semibold capitalize`,
                                                                children: event.category.replace('-', ' ')
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/webmaster/app/my-calendar/page.tsx",
                                                                lineNumber: 221,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm text-neutral-medium",
                                                                children: event.date.toLocaleDateString("en-US", {
                                                                    weekday: "long",
                                                                    month: "long",
                                                                    day: "numeric",
                                                                    year: "numeric"
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/webmaster/app/my-calendar/page.tsx",
                                                                lineNumber: 224,
                                                                columnNumber: 25
                                                            }, this),
                                                            event.date < new Date() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs bg-neutral-light/50 text-neutral-dark px-2 py-1 rounded-full",
                                                                children: "Past Event"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/webmaster/app/my-calendar/page.tsx",
                                                                lineNumber: 233,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/webmaster/app/my-calendar/page.tsx",
                                                        lineNumber: 220,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-2xl font-bold text-neutral-dark mb-2",
                                                        children: event.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/webmaster/app/my-calendar/page.tsx",
                                                        lineNumber: 238,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-neutral-medium mb-3",
                                                        children: event.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/webmaster/app/my-calendar/page.tsx",
                                                        lineNumber: 239,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap gap-4 text-sm text-neutral-medium",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "flex items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        className: "w-4 h-4 mr-1",
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        viewBox: "0 0 24 24",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            strokeWidth: 2,
                                                                            d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/webmaster/app/my-calendar/page.tsx",
                                                                            lineNumber: 243,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/webmaster/app/my-calendar/page.tsx",
                                                                        lineNumber: 242,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    event.time
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/webmaster/app/my-calendar/page.tsx",
                                                                lineNumber: 241,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "flex items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        className: "w-4 h-4 mr-1",
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        viewBox: "0 0 24 24",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                strokeWidth: 2,
                                                                                d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/webmaster/app/my-calendar/page.tsx",
                                                                                lineNumber: 249,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                strokeWidth: 2,
                                                                                d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/webmaster/app/my-calendar/page.tsx",
                                                                                lineNumber: 250,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/webmaster/app/my-calendar/page.tsx",
                                                                        lineNumber: 248,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    event.location
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/webmaster/app/my-calendar/page.tsx",
                                                                lineNumber: 247,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "flex items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        className: "w-4 h-4 mr-1",
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        viewBox: "0 0 24 24",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            strokeWidth: 2,
                                                                            d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/webmaster/app/my-calendar/page.tsx",
                                                                            lineNumber: 256,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/webmaster/app/my-calendar/page.tsx",
                                                                        lineNumber: 255,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    event.organizer
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/webmaster/app/my-calendar/page.tsx",
                                                                lineNumber: 254,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/webmaster/app/my-calendar/page.tsx",
                                                        lineNumber: 240,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/webmaster/app/my-calendar/page.tsx",
                                                lineNumber: 219,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$webmaster$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>removeFromMyCalendar(event.id),
                                                    className: "bg-red-50 hover:bg-red-100 text-red-600 font-semibold px-6 py-3 rounded-lg transition-all duration-300 border border-red-200",
                                                    children: "Remove"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/webmaster/app/my-calendar/page.tsx",
                                                    lineNumber: 263,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/webmaster/app/my-calendar/page.tsx",
                                                lineNumber: 262,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/webmaster/app/my-calendar/page.tsx",
                                        lineNumber: 218,
                                        columnNumber: 19
                                    }, this)
                                }, event.id, false, {
                                    fileName: "[project]/Desktop/webmaster/app/my-calendar/page.tsx",
                                    lineNumber: 213,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/webmaster/app/my-calendar/page.tsx",
                            lineNumber: 211,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/Desktop/webmaster/app/my-calendar/page.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/webmaster/app/my-calendar/page.tsx",
        lineNumber: 150,
        columnNumber: 5
    }, this);
}
_s(MyCalendarPage, "g6tEdmQQHul6BqQKp91CWTJrH1c=");
_c = MyCalendarPage;
var _c;
__turbopack_context__.k.register(_c, "MyCalendarPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_webmaster_app_my-calendar_page_tsx_c8c39640._.js.map