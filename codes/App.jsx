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