// import { StatusBar,  } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import styled from 'styled-components';
// import React, { useState, useEffect } from 'react';
// import Chart from 'chart.js/auto';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
  
// // }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// })

// import React, { useState, useEffect } from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Button } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import styled from 'styled-components';
// import Chart from 'chart.js/auto';

// export default function App() {
//   const [chartData, setChartData] = useState<any>(null);
//   const [selectedCrop, setSelectedCrop] = useState('wheat');
//   const [selectedTimeRange, setSelectedTimeRange] = useState('week');

//   useEffect(() => {
//     // Initialize chart
//     const ctx = document.getElementById('myChart') as HTMLCanvasElement;
//     const chart = new Chart(ctx, {
//       type: 'bar',
//       data: {
//         labels: ['January', 'February', 'March', 'April', 'May'],
//         datasets: [{
//           label: 'Yield',
//           data: [12, 19, 3, 5, 2],
//           backgroundColor: 'rgba(75, 192, 192, 0.2)',
//           borderColor: 'rgba(75, 192, 192, 1)',
//           borderWidth: 1
//         }]
//       },
//       options: {
//         responsive: true,
//         plugins: {
//           legend: {
//             position: 'top',
//           },
//           tooltip: {
//             enabled: true,
//           },
//         },
//       },
//     });

//     setChartData(chart);
//   }, []);

//   const handleCropChange = (value: string) => setSelectedCrop(value);
//   const handleTimeRangeChange = (value: string) => setSelectedTimeRange(value);

//   return (
//     <StyledContainer>
//       <Text style={styles.heading}>FarmDash Dashboard</Text>

//       <StyledPicker
//         selectedValue={selectedCrop}
//         onValueChange={handleCropChange}>
//         <Picker.Item label="Wheat" value="wheat" />
//         <Picker.Item label="Rice" value="rice" />
//         <Picker.Item label="Corn" value="corn" />
//         <Picker.Item label="Soybean" value="soybean" />
//       </StyledPicker>

//       <StyledPicker
//         selectedValue={selectedTimeRange}
//         onValueChange={handleTimeRangeChange}>
//         <Picker.Item label="Weekly" value="week" />
//         <Picker.Item label="Monthly" value="month" />
//         <Picker.Item label="Quarterly" value="quarter" />
//         <Picker.Item label="Yearly" value="year" />
//       </StyledPicker>

//       <StyledButton title="Refresh Data" onPress={() => console.log('Refreshing...')} />

//       <View style={styles.chartContainer}>
//         <canvas id="myChart" width="400" height="400"></canvas>
//       </View>

//       <StatusBar style="auto" />
//     </StyledContainer>
//   );
// }

// const StyledContainer = styled(View)`
//   flex: 1;
//   background-color: white;
//   align-items: center;
//   justify-content: center;
// `;

// const StyledPicker = styled(Picker)`
//   height: 50px;
//   width: 200px;
//   margin: 10px;
// `;

// const StyledButton = styled(Button)`
//   margin: 20px;
// `;

// const styles = StyleSheet.create({
//   chartContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '100%',
//     height: 300,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
// });


// import React, { useEffect, useState } from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import styled from 'styled-components/native';
// import Chart from 'chart.js/auto';

// const App = () => {
//   const [charts, setCharts] = useState({});

//   // Initialize Charts
//   useEffect(() => {
//     initializeCharts();
//   }, []);

//   const initializeCharts = () => {
//     setCharts({
//       yield: new Chart(document.getElementById('yieldChart'), {
//         type: 'bar',
//         data: {
//           labels: [],
//           datasets: [{ label: 'Yield', data: [], backgroundColor: '#4CAF50' }],
//         },
//         options: { responsive: true, maintainAspectRatio: false },
//       }),
//       growth: new Chart(document.getElementById('growthChart'), {
//         type: 'line',
//         data: {
//           labels: [],
//           datasets: [{ label: 'Growth', data: [], borderColor: '#2196F3', tension: 0.1 }],
//         },
//         options: { responsive: true, maintainAspectRatio: false },
//       }),
//       profit: new Chart(document.getElementById('profitChart'), {
//         type: 'line',
//         data: {
//           labels: [],
//           datasets: [
//             { label: 'Profit', data: [], borderColor: '#4CAF50', tension: 0.1 },
//             { label: 'Expense', data: [], borderColor: '#f44336', tension: 0.1 },
//           ],
//         },
//         options: { responsive: true, maintainAspectRatio: false },
//       }),
//       price: new Chart(document.getElementById('priceChart'), {
//         type: 'bar',
//         data: {
//           labels: [],
//           datasets: [{ label: 'Price', data: [], backgroundColor: '#FF9800' }],
//         },
//         options: { responsive: true, maintainAspectRatio: false },
//       }),
//     });
//   };

//   const refreshData = async () => {
//     // Simulate API data fetching and update the charts
//     const data = await fetchDashboardData();
//     updateCharts(data);
//   };

//   const fetchDashboardData = async () => {
//     // Simulate an API call to fetch data
//     return {
//       yieldData: { labels: ['Jan', 'Feb', 'Mar'], data: [100, 200, 150] },
//       growthData: { labels: ['Day 1', 'Day 2', 'Day 3'], data: [300, 400, 350] },
//       profitData: { labels: ['Jan', 'Feb', 'Mar'], profit: [5000, 6000, 5500], expense: [2000, 3000, 2500] },
//       priceData: { labels: ['Center A', 'Center B'], data: [1000, 1200] },
//     };
//   };

//   const updateCharts = (data) => {
//     // Update chart data with the fetched data
//     charts.yield.data.labels = data.yieldData.labels;
//     charts.yield.data.datasets[0].data = data.yieldData.data;
//     charts.yield.update();

//     charts.growth.data.labels = data.growthData.labels;
//     charts.growth.data.datasets[0].data = data.growthData.data;
//     charts.growth.update();

//     charts.profit.data.labels = data.profitData.labels;
//     charts.profit.data.datasets[0].data = data.profitData.profit;
//     charts.profit.data.datasets[1].data = data.profitData.expense;
//     charts.profit.update();

//     charts.price.data.labels = data.priceData.labels;
//     charts.price.data.datasets[0].data = data.priceData.data;
//     charts.price.update();
//   };

//   return (
//     <StyledContainer>
//       <StatusBar style="auto" />
//       <Navbar>
//         <Logo>🌱 FarmDash</Logo>
//         <NavLinks>
//           <NavLink>Dashboard</NavLink>
//           <NavLink>Resources</NavLink>
//           <NavLink>Support</NavLink>
//         </NavLinks>
//       </Navbar>

//       <Filters>
//         <Picker selectedValue="wheat" style={{ width: 150 }}>
//           <Picker.Item label="Wheat" value="wheat" />
//           <Picker.Item label="Rice" value="rice" />
//           <Picker.Item label="Corn" value="corn" />
//           <Picker.Item label="Soybean" value="soybean" />
//         </Picker>
//         <Picker selectedValue="month" style={{ width: 150 }}>
//           <Picker.Item label="Weekly" value="week" />
//           <Picker.Item label="Monthly" value="month" />
//           <Picker.Item label="Quarterly" value="quarter" />
//           <Picker.Item label="Yearly" value="year" />
//         </Picker>
//         <Button title="Refresh" onPress={refreshData} />
//       </Filters>

//       <Grid>
//         <Card>
//           <CardHeader>📈 Yield Information</CardHeader>
//           <ChartContainer>
//             <canvas id="yieldChart" />
//           </ChartContainer>
//         </Card>
//         <Card>
//           <CardHeader>🌱 Growth Stages</CardHeader>
//           <ChartContainer>
//             <canvas id="growthChart" />
//           </ChartContainer>
//         </Card>
//         <Card>
//           <CardHeader>💰 Profit vs Expense</CardHeader>
//           <ChartContainer>
//             <canvas id="profitChart" />
//           </ChartContainer>
//         </Card>
//         <Card>
//           <CardHeader>🏢 Collection Center Prices</CardHeader>
//           <ChartContainer>
//             <canvas id="priceChart" />
//           </ChartContainer>
//         </Card>
//       </Grid>

//       <StatsGrid>
//         <StatCard>
//           <StatValue>1000kg</StatValue>
//           <StatLabel>Seeds</StatLabel>
//         </StatCard>
//         <StatCard>
//           <StatValue>500kg</StatValue>
//           <StatLabel>Fertilizers</StatLabel>
//         </StatCard>
//         <StatCard>
//           <StatValue>20</StatValue>
//           <StatLabel>Tools</StatLabel>
//         </StatCard>
//       </StatsGrid>
//     </StyledContainer>
//   );
// };

// const StyledContainer = styled.View`
//   flex: 1;
//   background-color: #f5f5f5;
//   padding: 16px;
// `;

// const Navbar = styled.View`
//   background-color: white;
//   padding: 16px;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// `;

// const Logo = styled.Text`
//   font-size: 24px;
//   font-weight: bold;
//   color: #4caf50;
// `;

// const NavLinks = styled.View`
//   flex-direction: row;
// `;

// const NavLink = styled.Text`
//   margin-left: 20px;
//   color: #333;
//   font-size: 16px;
// `;

// const Filters = styled.View`
//   flex-direction: row;
//   justify-content: space-between;
//   margin: 16px 0;
// `;

// const Grid = styled.ScrollView`
//   flex: 1;
//   margin-bottom: 16px;
// `;

// const Card = styled.View`
//   background-color: white;
//   border-radius: 8px;
//   padding: 16px;
//   margin-bottom: 16px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// `;

// const CardHeader = styled.Text`
//   font-size: 18px;
//   font-weight: bold;
//   margin-bottom: 16px;
// `;

// const ChartContainer = styled.View`
//   height: 300px;
// `;

// const StatsGrid = styled.View`
//   flex-direction: row;
//   justify-content: space-between;
//   flex-wrap: wrap;
// `;

// const StatCard = styled.View`
//   background-color: #f0f9ff;
//   padding: 16px;
//   border-radius: 8px;
//   width: 30%;
//   margin-bottom: 16px;
// `;

// const StatValue = styled.Text`
//   font-size: 24px;
//   font-weight: bold;
//   color: #4caf50;
// `;

// const StatLabel = styled.Text`
//   font-size: 14px;
//   color: #666;
// `;

// const refreshData = async () => {
//   // Simulate an API call to fetch data
//   return {
//     yieldData: { labels: ['Jan', 'Feb', 'Mar'], data: [100, 200, 150] },
//     growthData: { labels: ['Day 1', 'Day 2', 'Day 3'], data: [300, 400, 350] },
//     profitData: { labels: ['Jan', 'Feb', 'Mar'], profit: [5000, 6000, 5500], expense: [2000, 3000, 2500] },
//     priceData: { labels: ['Center A', 'Center B'], data: [1000, 1200] },
//   };
// };

// export default App;




// import React, { useState, useEffect } from 'react';
// import { View, Text, Picker, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
// import { LineChart, BarChart } from 'react-native-chart-kit';

// export default function App() {
//   const [crop, setCrop] = useState('wheat');
//   const [timeRange, setTimeRange] = useState('week');
//   const [loading, setLoading] = useState(false);
//   const [dashboardData, setDashboardData] = useState(null);

//   const fetchDashboardData = async () => {
//     setLoading(true);
//     // Simulate API call
//     setTimeout(() => {
//       setDashboardData({
//         yieldData: {
//           labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
//           data: Array.from({ length: 6 }, () => Math.floor(Math.random() * 5000)),
//         },
//         growthData: {
//           labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
//           data: Array.from({ length: 5 }, () => Math.floor(Math.random() * 4000)),
//         },
//         profitData: {
//           labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
//           profit: Array.from({ length: 6 }, () => Math.floor(Math.random() * 10000)),
//           expense: Array.from({ length: 6 }, () => Math.floor(Math.random() * 5000)),
//         },
//         priceData: {
//           labels: ['Center A', 'Center B', 'Center C', 'Center D', 'Center E'],
//           data: Array.from({ length: 5 }, () => Math.floor(Math.random() * 5000)),
//         },
//         inventory: {
//           seeds: Math.floor(Math.random() * 1000),
//           fertilizers: Math.floor(Math.random() * 1000),
//           tools: Math.floor(Math.random() * 50),
//         },
//         financials: {
//           revenue: Math.floor(Math.random() * 100000),
//           expenses: Math.floor(Math.random() * 50000),
//         },
//       });
//       setLoading(false);
//     }, 2000); // Simulate a 2 second delay
//   };

//   useEffect(() => {
//     fetchDashboardData();
//   }, [crop, timeRange]);

//   return (
//     <View style={styles.container}>
//       <StatusBar style="auto" />
      
//       <View style={styles.navbar}>
//         <Text style={styles.logo}>🌱 FarmDash</Text>
//       </View>

//       <View style={styles.filters}>
//         <Picker
//           selectedValue={crop}
//           style={styles.picker}
//           onValueChange={(itemValue) => setCrop(itemValue)}
//         >
//           <Picker.Item label="Wheat" value="wheat" />
//           <Picker.Item label="Rice" value="rice" />
//           <Picker.Item label="Corn" value="corn" />
//           <Picker.Item label="Soybean" value="soybean" />
//         </Picker>

//         <Picker
//           selectedValue={timeRange}
//           style={styles.picker}
//           onValueChange={(itemValue) => setTimeRange(itemValue)}
//         >
//           <Picker.Item label="Weekly" value="week" />
//           <Picker.Item label="Monthly" value="month" />
//           <Picker.Item label="Quarterly" value="quarter" />
//           <Picker.Item label="Yearly" value="year" />
//         </Picker>

//         <TouchableOpacity style={styles.button} onPress={fetchDashboardData}>
//           <Text style={styles.buttonText}>Refresh</Text>
//         </TouchableOpacity>
//       </View>

//       {loading ? (
//         <ActivityIndicator size="large" color="#4CAF50" />
//       ) : (
//         <ScrollView contentContainerStyle={styles.grid}>
//           {/* Yield Information */}
//           <View style={styles.card}>
//             <Text style={styles.cardHeader}>📈 Yield Information</Text>
//             <BarChart
//               data={{
//                 labels: dashboardData?.yieldData.labels,
//                 datasets: [
//                   {
//                     data: dashboardData?.yieldData.data,
//                     color: (opacity = 1) => `rgba(76, 175, 80, ${opacity})`,
//                   },
//                 ],
//               }}
//               width={340}
//               height={220}
//               yAxisLabel=""
//               chartConfig={{
//                 backgroundColor: 'white',
//                 backgroundGradientFrom: 'white',
//                 backgroundGradientTo: 'white',
//                 decimalPlaces: 0,
//                 color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//                 labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//               }}
//               style={styles.chart}
//             />
//           </View>

//           {/* Growth Stages */}
//           <View style={styles.card}>
//             <Text style={styles.cardHeader}>🌱 Growth Stages</Text>
//             <LineChart
//               data={{
//                 labels: dashboardData?.growthData.labels,
//                 datasets: [
//                   {
//                     data: dashboardData?.growthData.data,
//                     strokeWidth: 2,
//                     color: (opacity = 1) => `rgba(33, 150, 243, ${opacity})`,
//                   },
//                 ],
//               }}
//               width={340}
//               height={220}
//               chartConfig={{
//                 backgroundColor: 'white',
//                 backgroundGradientFrom: 'white',
//                 backgroundGradientTo: 'white',
//                 decimalPlaces: 0,
//                 color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//                 labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//               }}
//               style={styles.chart}
//             />
//           </View>

//           {/* Profit vs Expense */}
//           <View style={styles.card}>
//             <Text style={styles.cardHeader}>💰 Profit vs Expense</Text>
//             <LineChart
//               data={{
//                 labels: dashboardData?.profitData.labels,
//                 datasets: [
//                   {
//                     data: dashboardData?.profitData.profit,
//                     strokeWidth: 2,
//                     color: (opacity = 1) => `rgba(76, 175, 80, ${opacity})`,
//                   },
//                   {
//                     data: dashboardData?.profitData.expense,
//                     strokeWidth: 2,
//                     color: (opacity = 1) => `rgba(244, 67, 54, ${opacity})`,
//                   },
//                 ],
//               }}
//               width={340}
//               height={220}
//               chartConfig={{
//                 backgroundColor: 'white',
//                 backgroundGradientFrom: 'white',
//                 backgroundGradientTo: 'white',
//                 decimalPlaces: 0,
//                 color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//                 labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//               }}
//               style={styles.chart}
//             />
//           </View>

//           {/* Collection Center Prices */}
//           <View style={styles.card}>
//             <Text style={styles.cardHeader}>🏢 Collection Center Prices</Text>
//             <BarChart
//               data={{
//                 labels: dashboardData?.priceData.labels,
//                 datasets: [
//                   {
//                     data: dashboardData?.priceData.data,
//                     color: (opacity = 1) => `rgba(255, 152, 0, ${opacity})`,
//                   },
//                 ],
//               }}
//               width={340}
//               height={220}
//               yAxisLabel=""
//               chartConfig={{
//                 backgroundColor: 'white',
//                 backgroundGradientFrom: 'white',
//                 backgroundGradientTo: 'white',
//                 decimalPlaces: 0,
//                 color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//                 labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//               }}
//               style={styles.chart}
//             />
//           </View>

//           {/* Inventory Status */}
//           <View style={styles.card}>
//             <Text style={styles.cardHeader}>📦 Inventory Status</Text>
//             <View style={styles.statsGrid}>
//               <Text>Seeds: {dashboardData?.inventory.seeds}kg</Text>
//               <Text>Fertilizers: {dashboardData?.inventory.fertilizers}kg</Text>
//               <Text>Tools: {dashboardData?.inventory.tools}</Text>
//             </View>
//           </View>

//           {/* Financial Summary */}
//           <View style={styles.card}>
//             <Text style={styles.cardHeader}>🧮 Financial Summary</Text>
//             <View style={styles.statsGrid}>
//               <Text>Revenue: ₹{dashboardData?.financials.revenue}</Text>
//               <Text>Expenses: ₹{dashboardData?.financials.expenses}</Text>
//             </View>
//           </View>

//           {/* Crop Recommendations */}
//           <View style={styles.card}>
//             <Text style={styles.cardHeader}>🌾 Crop Recommendations</Text>
//             <Text>Based on your farm data, we recommend focusing on {crop} for the next cycle.</Text>
//           </View>
//         </ScrollView>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f0f0f0',
//     paddingTop: 20,
//   },
//   navbar: {
//     backgroundColor: '#4CAF50',
//     padding: 10,
//     alignItems: 'center',
//   },
//   logo: {
//     fontSize: 24,
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   filters: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     padding: 10,
//     backgroundColor: '#fff',
//   },
//   picker: {
//     height: 40,
//     width: 100,
//   },
//   button: {
//     backgroundColor: '#4CAF50',
//     padding: 10,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   grid: {
//     padding: 10,
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     marginBottom: 20,
//     padding: 15,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//   },
//   cardHeader: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   chart: {
//     borderRadius: 8,
//   },
//   statsGrid: {
//     marginTop: 10,
//   },
// });

// const styless = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     paddingTop: 20,
//   },
//   navbar: {
//     backgroundColor: '#fff',
//     padding: 16,
//     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//   },
//   navbarContent: {
//     maxWidth: 1200,
//     margin: '0 auto',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   logo: {
//     fontSize: 24,
//     color: '#4CAF50',
//     fontWeight: 'bold',
//   },
//   navLinks: {
//     flexDirection: 'row',
//     gap: 20,
//   },
//   navLink: {
//     color: '#333',
//     fontSize: 16,
//   },
//   filters: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 16,
//     paddingHorizontal: 16,
//   },
//   select: {
//     height: 40,
//     width: 120,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 4,
//     backgroundColor: 'white',
//   },
//   button: {
//     backgroundColor: '#4CAF50',
//     padding: 10,
//     borderRadius: 4,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//   },
//   grid: {
//     paddingHorizontal: 16,
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     padding: 16,
//     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//     marginBottom: 20,
//   },
//   cardHeader: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   chartContainer: {
//     height: 300,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 8,
//   },
//   statCard: {
//     backgroundColor: '#f0f9ff',
//     padding: 16,
//     borderRadius: 4,
//     marginBottom: 20,
//   },
//   statValue: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#4CAF50',
//   },
//   statLabel: {
//     fontSize: 14,
//     color: '#666',
//   },
//   loading: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: 200,
//   },
//   loadingSpinner: {
//     border: '4px solid #f3f3f3',
//     borderTop: '4px solid #4CAF50',
//     borderRadius: '50%',
//     width: 40,
//     height: 40,
//     animation: 'spin 1s linear infinite',
//   },
//   '@keyframes spin': {
//     '0%': { transform: 'rotate(0deg)' },
//     '100%': { transform: 'rotate(360deg)' },
//   },
// });



import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { LineChart, BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

// Components
const NavBar = () => (
  <View style={styles.navbar}>
    <View style={styles.navbarContent}>
      <Text style={styles.logo}>🌱 FarmDash</Text>
      <View style={styles.navLinks}>
        <Text style={styles.navLink}>Dashboard</Text>
        <Text style={styles.navLink}>Resources</Text>
        <Text style={styles.navLink}>Support</Text>
      </View>
    </View>
  </View>
);

const Filters = ({ selectedCrop, setSelectedCrop, timeRange, setTimeRange, onRefresh }) => (
  <View style={styles.filters}>
    <Picker
      selectedValue={selectedCrop}
      style={styles.picker}
      onValueChange={(value) => setSelectedCrop(value)}
    >
      <Picker.Item label="Wheat" value="wheat" />
      <Picker.Item label="Rice" value="rice" />
      <Picker.Item label="Corn" value="corn" />
      <Picker.Item label="Soybean" value="soybean" />
    </Picker>
    
    <Picker
      selectedValue={timeRange}
      style={styles.picker}
      onValueChange={(value) => setTimeRange(value)}
    >
      <Picker.Item label="Weekly" value="week" />
      <Picker.Item label="Monthly" value="month" />
      <Picker.Item label="Quarterly" value="quarter" />
      <Picker.Item label="Yearly" value="year" />
    </Picker>
    
    <TouchableOpacity style={styles.refreshButton} onPress={onRefresh}>
      <Text style={styles.refreshButtonText}>Refresh</Text>
    </TouchableOpacity>
  </View>
);

const Card = ({ title, children }) => (
  <View style={styles.card}>
    <Text style={styles.cardHeader}>{title}</Text>
    {children}
  </View>
);

const StatCard = ({ value, label }) => (
  <View style={styles.statCard}>
    <Text style={styles.statValue}>{value}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

const chartConfig = {
  backgroundColor: '#ffffff',
  backgroundGradientFrom: '#ffffff',
  backgroundGradientTo: '#ffffff',
  color: (opacity = 1) => `rgba(76, 175, 80, ${opacity})`,
  style: {
    borderRadius: 16
  }
};

export default function App() {
  const [selectedCrop, setSelectedCrop] = useState('wheat');
  const [timeRange, setTimeRange] = useState('week');
  const [loading, setLoading] = useState(false);
  const [dashboardData, setDashboardData] = useState(null);

  const fetchDashboardData = async (crop, timeRange) => {
    setLoading(true);
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const data = {
        yieldData: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          data: Array.from({length: 6}, () => Math.floor(Math.random() * 5000))
        },
        growthData: {
          labels: Array.from({length: 6}, (_, i) => `Day ${i*10}`),
          data: Array.from({length: 6}, () => Math.floor(Math.random() * 4000))
        },
        profitData: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          profit: Array.from({length: 6}, () => Math.floor(Math.random() * 10000)),
          expense: Array.from({length: 6}, () => Math.floor(Math.random() * 5000))
        },
        priceData: {
          labels: ['Center A', 'Center B', 'Center C', 'Center D', 'Center E'],
          data: Array.from({length: 5}, () => Math.floor(Math.random() * 5000))
        },
        inventory: {
          seeds: Math.floor(Math.random() * 1000),
          fertilizers: Math.floor(Math.random() * 1000),
          tools: Math.floor(Math.random() * 50)
        },
        financials: {
          revenue: Math.floor(Math.random() * 100000),
          expenses: Math.floor(Math.random() * 50000)
        }
      };
      
      setDashboardData(data);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData(selectedCrop, timeRange);
  }, []);

  if (!dashboardData) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4CAF50" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <NavBar />
      <ScrollView>
        <View style={styles.content}>
          <Filters
            selectedCrop={selectedCrop}
            setSelectedCrop={setSelectedCrop}
            timeRange={timeRange}
            setTimeRange={setTimeRange}
            onRefresh={() => fetchDashboardData(selectedCrop, timeRange)}
          />
          
          {loading && (
            <ActivityIndicator size="large" color="#4CAF50" style={styles.loader} />
          )}

          <View style={styles.grid}>
            <Card title="📈 Yield Information">
              <LineChart
                data={{
                  labels: dashboardData.yieldData.labels,
                  datasets: [{ data: dashboardData.yieldData.data }]
                }}
                width={screenWidth - 60}
                height={220}
                chartConfig={chartConfig}
                bezier
              />
            </Card>

            <Card title="🌱 Growth Stages">
              <LineChart
                data={{
                  labels: dashboardData.growthData.labels,
                  datasets: [{ data: dashboardData.growthData.data }]
                }}
                width={screenWidth - 60}
                height={220}
                chartConfig={chartConfig}
                bezier
              />
            </Card>

            <Card title="💰 Profit vs Expense">
              <LineChart
                data={{
                  labels: dashboardData.profitData.labels,
                  datasets: [
                    { data: dashboardData.profitData.profit },
                    { data: dashboardData.profitData.expense }
                  ]
                }}
                width={screenWidth - 60}
                height={220}
                chartConfig={{
                  ...chartConfig,
                  color: (opacity = 1) => `rgba(33, 150, 243, ${opacity})`
                }}
                bezier
              />
            </Card>

            <Card title="🏢 Collection Center Prices">
              <BarChart
                data={{
                  labels: dashboardData.priceData.labels,
                  datasets: [{ data: dashboardData.priceData.data }]
                }}
                width={screenWidth - 60}
                height={220}
                chartConfig={{
                  ...chartConfig,
                  color: (opacity = 1) => `rgba(255, 152, 0, ${opacity})`
                }}
              />
            </Card>

            <Card title="📦 Inventory Status">
              <View style={styles.statsGrid}>
                <StatCard value={`${dashboardData.inventory.seeds}kg`} label="Seeds" />
                <StatCard value={`${dashboardData.inventory.fertilizers}kg`} label="Fertilizers" />
                <StatCard value={dashboardData.inventory.tools} label="Tools" />
              </View>
            </Card>

            <Card title="🧮 Financial Summary">
              <View style={styles.statsGrid}>
                <StatCard 
                  value={`₹${dashboardData.financials.revenue.toLocaleString()}`} 
                  label="Revenue" 
                />
                <StatCard 
                  value={`₹${dashboardData.financials.expenses.toLocaleString()}`} 
                  label="Expenses" 
                />
              </View>
            </Card>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 15,
  },
  navbar: {
    backgroundColor: 'white',
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  navbarContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  navLinks: {
    flexDirection: 'row',
  },
  navLink: {
    marginLeft: 20,
    color: '#333333',
  },
  filters: {
    flexDirection: 'row',
    marginBottom: 20,
    flexWrap: 'wrap',
  },
  picker: {
    flex: 1,
    height: 50,
    marginRight: 10,
  },
  refreshButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  refreshButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  grid: {
    gap: 15,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#f0f9ff',
    padding: 15,
    borderRadius: 4,
    minWidth: 150,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    marginVertical: 20,
  },
});