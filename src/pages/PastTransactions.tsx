import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const PastTransactions = () => {
  const transactions = [
    {
      id: 1,
      address: "780 Palm Island Drive, Miami Beach, FL",
      price: "$8,750,000",
      status: "Sold",
      date: "March 2024",
      bedrooms: 6,
      bathrooms: 7.5,
      image: "/api/placeholder/400/300",
      type: "Luxury Waterfront"
    },
    {
      id: 2,
      address: "150 Central Park South, New York, NY",
      price: "$5,150,000",
      status: "Sold",
      date: "February 2024",
      bedrooms: 3,
      bathrooms: 4,
      image: "/api/placeholder/400/300",
      type: "Penthouse"
    },
    {
      id: 3,
      address: "245 Oceanview Drive, Malibu, California",
      price: "$4,750,000",
      status: "Sold",
      date: "January 2024",
      bedrooms: 5,
      bathrooms: 5.5,
      image: "/api/placeholder/400/300",
      type: "Oceanfront Villa"
    },
    {
      id: 4,
      address: "1234 Beverly Hills Drive, Beverly Hills, CA",
      price: "$3,200,000",
      status: "Sold",
      date: "December 2023",
      bedrooms: 4,
      bathrooms: 4,
      image: "/api/placeholder/400/300",
      type: "Modern Estate"
    },
    {
      id: 5,
      address: "567 Sunset Boulevard, West Hollywood, CA",
      price: "$2,850,000",
      status: "Sold",
      date: "November 2023",
      bedrooms: 3,
      bathrooms: 3.5,
      image: "/api/placeholder/400/300",
      type: "Contemporary Home"
    },
    {
      id: 6,
      address: "890 Pacific Coast Highway, Laguna Beach, CA",
      price: "$4,100,000",
      status: "Sold",
      date: "October 2023",
      bedrooms: 4,
      bathrooms: 4.5,
      image: "/api/placeholder/400/300",
      type: "Coastal Retreat"
    }
  ];

  const totalSales = transactions.reduce((sum, transaction) => {
    const price = parseFloat(transaction.price.replace(/[$,]/g, ''));
    return sum + price;
  }, 0);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-neutral-50 to-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <h1 className="heading-xl text-text-primary mb-6">
                Past Transactions
              </h1>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
                A showcase of our successful property sales and satisfied clients
              </p>
              
              {/* Stats */}
              <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-4xl font-light text-text-primary mb-2">
                    {transactions.length}+
                  </div>
                  <p className="text-text-secondary">Properties Sold</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-light text-text-primary mb-2">
                    ${(totalSales / 1000000).toFixed(0)}M+
                  </div>
                  <p className="text-text-secondary">Total Sales Volume</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-light text-text-primary mb-2">
                    100%
                  </div>
                  <p className="text-text-secondary">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transactions Grid */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {transactions.map((transaction) => (
                <div 
                  key={transaction.id}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-6">
                    <img 
                      src={transaction.image}
                      alt={transaction.address}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {transaction.status}
                      </span>
                    </div>
                    
                    {/* Property Type */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                        {transaction.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-semibold text-text-primary group-hover:text-primary-600 transition-colors">
                        {transaction.price}
                      </h3>
                      <span className="text-sm text-text-muted">
                        {transaction.date}
                      </span>
                    </div>
                    
                    <p className="text-text-secondary">
                      {transaction.address}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-text-muted">
                      <span>{transaction.bedrooms} Bedrooms</span>
                      <span>{transaction.bathrooms} Bathrooms</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-neutral-50">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <h2 className="heading-lg text-text-primary mb-4">
              Ready to Sell Your Property?
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Join our list of satisfied clients and achieve the best possible outcome for your property sale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="btn-primary"
              >
                Get Free Consultation
              </a>
              <a 
                href="/featured-properties"
                className="btn-secondary"
              >
                View Current Listings
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PastTransactions;
