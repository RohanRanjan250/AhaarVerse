import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Book, DollarSign, HelpCircle, Home, Package, Leaf, TrendingUp, FileText, Building2, Calculator, Loader2 } from 'lucide-react';

const FarmerDashboard = () => {
    // State management
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCrop, setSelectedCrop] = useState('wheat');
    const [selectedTimeRange, setSelectedTimeRange] = useState('month');
    const [dashboardData, setDashboardData] = useState({
        yieldData: [],
        growthData: [],
        profitData: [],
        priceData: [],
        inventory: {},
        financials: {},
        recommendations: [],
        schemes: [],
    });

    // Simulated API call function
    const fetchDashboardData = async (crop, timeRange) => {
        setLoading(true);
        try {
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Simulated dynamic data based on selected crop and time range
            const data = {
                yieldData: [
                    { month: 'Jan', yield: Math.floor(Math.random() * 5000) },
                    { month: 'Feb', yield: Math.floor(Math.random() * 5000) },
                    { month: 'Mar', yield: Math.floor(Math.random() * 5000) },
                    { month: 'Apr', yield: Math.floor(Math.random() * 5000) },
                    { month: 'May', yield: Math.floor(Math.random() * 5000) },
                    { month: 'Jun', yield: Math.floor(Math.random() * 5000) },
                ],
                growthData: Array.from({ length: 6 }, (_, i) => ({
                    day: (i * 10).toString(),
                    growth: Math.floor(Math.random() * 4000)
                })),
                profitData: Array.from({ length: 6 }, (_, i) => ({
                    month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][i],
                    profit: Math.floor(Math.random() * 10000),
                    expense: Math.floor(Math.random() * 5000)
                })),
                priceData: Array.from({ length: 5 }, (_, i) => ({
                    center: `Center ${String.fromCharCode(65 + i)}`,
                    price: Math.floor(Math.random() * 5000)
                })),
                inventory: {
                    seeds: Math.floor(Math.random() * 1000),
                    fertilizers: Math.floor(Math.random() * 1000),
                    tools: Math.floor(Math.random() * 50)
                },
                financials: {
                    revenue: Math.floor(Math.random() * 100000),
                    expenses: Math.floor(Math.random() * 50000)
                },
                recommendations: [
                    `${selectedCrop} (Best season: ${timeRange === 'month' ? 'Current' : 'Next'} season)`,
                    'Alternative Crop 1',
                    'Alternative Crop 2'
                ],
                schemes: [
                    'PM Kisan Scheme',
                    'Crop Insurance',
                    'Equipment Subsidy'
                ]
            };

            setDashboardData(data);
            setLoading(false);
        } catch (err) {
            setError('Failed to fetch dashboard data');
            setLoading(false);
        }
    };

    // Fetch data on mount and when filters change
    useEffect(() => {
        fetchDashboardData(selectedCrop, selectedTimeRange);
    }, [selectedCrop, selectedTimeRange]);

    // Loading component
    const LoadingSpinner = () => (
        <div className="flex items-center justify-center p-8">
            <Loader2 className="h-8 w-8 animate-spin text-green-600" />
        </div>
    );

    // Error component
    const ErrorAlert = ({ message }) => (
        <Alert variant="destructive" className="mb-4">
            <AlertDescription>{message}</AlertDescription>
        </Alert>
    );

    // Filter controls
    const FilterControls = () => (
        <div className="flex flex-wrap gap-4 mb-6">
            <Select value={selectedCrop} onValueChange={setSelectedCrop}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select crop" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="wheat">Wheat</SelectItem>
                    <SelectItem value="rice">Rice</SelectItem>
                    <SelectItem value="corn">Corn</SelectItem>
                    <SelectItem value="soybean">Soybean</SelectItem>
                </SelectContent>
            </Select>

            <Select value={selectedTimeRange} onValueChange={setSelectedTimeRange}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select time range" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="week">Weekly</SelectItem>
                    <SelectItem value="month">Monthly</SelectItem>
                    <SelectItem value="quarter">Quarterly</SelectItem>
                    <SelectItem value="year">Yearly</SelectItem>
                </SelectContent>
            </Select>

            <Button
                variant="outline"
                onClick={() => fetchDashboardData(selectedCrop, selectedTimeRange)}
                disabled={loading}
            >
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Refresh'}
            </Button>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation Bar */}
            <nav className="bg-white shadow-lg">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="flex-shrink-0 flex items-center">
                                <Leaf className="h-8 w-8 text-green-600" />
                                <span className="ml-2 text-xl font-bold text-gray-800">FarmDash</span>
                            </div>
                            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                <a className="border-green-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                    Dashboard
                                </a>
                                <a className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
                                    Resources
                                </a>
                                <a className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
                                    Support
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {error && <ErrorAlert message={error} />}

                <FilterControls />

                {loading ? (
                    <LoadingSpinner />
                ) : (
                    <>
                        {/* Charts Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            {/* Yield Information */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <TrendingUp className="mr-2" /> Yield Information
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ResponsiveContainer width="100%" height={300}>
                                        <BarChart data={dashboardData.yieldData}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="month" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Bar dataKey="yield" fill="#4CAF50" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </CardContent>
                            </Card>

                            {/* Growth Stages */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <Leaf className="mr-2" /> Growth Stages
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ResponsiveContainer width="100%" height={300}>
                                        <LineChart data={dashboardData.growthData}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="day" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Line type="monotone" dataKey="growth" stroke="#2196F3" />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </CardContent>
                            </Card>

                            {/* Profit vs Expense */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <DollarSign className="mr-2" /> Profit vs Expense
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ResponsiveContainer width="100%" height={300}>
                                        <LineChart data={dashboardData.profitData}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="month" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Line type="monotone" dataKey="profit" stroke="#4CAF50" />
                                            <Line type="monotone" dataKey="expense" stroke="#f44336" />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </CardContent>
                            </Card>

                            {/* Collection Center Prices */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <Building2 className="mr-2" /> Collection Center Prices
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ResponsiveContainer width="100%" height={300}>
                                        <BarChart data={dashboardData.priceData}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="center" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Bar dataKey="price" fill="#FF9800" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Additional Features */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Resource Management */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <Package className="mr-2" /> Inventory Status
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="bg-yellow-50 p-4 rounded-lg">
                                            <h4 className="font-semibold mb-2">Current Stock</h4>
                                            <ul className="list-disc pl-4">
                                                <li>Seeds: {dashboardData.inventory.seeds}kg</li>
                                                <li>Fertilizers: {dashboardData.inventory.fertilizers}kg</li>
                                                <li>Tools: {dashboardData.inventory.tools} items</li>
                                            </ul>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Financial Summary */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <Calculator className="mr-2" /> Financial Summary
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-green-50 p-4 rounded-lg">
                                                <p className="text-sm text-gray-600">Total Revenue</p>
                                                <p className="text-2xl font-bold text-green-600">
                                                    ₹{dashboardData.financials.revenue.toLocaleString()}
                                                </p>
                                            </div>
                                            <div className="bg-red-50 p-4 rounded-lg">
                                                <p className="text-sm text-gray-600">Total Expenses</p>
                                                <p className="text-2xl font-bold text-red-600">
                                                    ₹{dashboardData.financials.expenses.toLocaleString()}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Recommendations */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <Leaf className="mr-2" /> Crop Recommendations
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="bg-green-50 p-4 rounded-lg">
                                            <h4 className="font-semibold">Based on your location:</h4>
                                            <ul className="mt-2 space-y-2">
                                                {dashboardData.recommendations.map((rec, index) => (
                                                    <li key={index}>🌾 {rec}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Government Schemes */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <FileText className="mr-2" /> Government Schemes
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h4 className="font-semibold mb-2">Available Subsidies</h4>
                                            <ul className="list-disc pl-4">
                                                {dashboardData.schemes.map((scheme, index) => (
                                                    <li key={index}>{scheme}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default FarmerDashboard;