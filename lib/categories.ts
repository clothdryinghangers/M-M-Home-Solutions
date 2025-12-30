export interface CategoryData {
  slug: string
  name: string
  title: string
  description: string
  keywords: string
  h1: string
  h2: string
  content: string
  features: string[]
  areas: string[]
  image: string
  products: Array<{
    name: string
    slug: string
    description: string
    image: string
    price?: string
  }>
}

export const categories: Record<string, CategoryData> = {
  'ceiling-cloth-drying-hangers': {
    slug: 'ceiling-cloth-drying-hangers',
    name: 'Cloth Drying Hangers',
    title: 'Cloth Drying Hangers in Hyderabad & Secunderabad',
    description: 'Premium cloth drying hangers for balconies in Hyderabad & Secunderabad. Free installation, 1-3 years warranty, same-day delivery.',
    keywords: 'cloth drying hangers Hyderabad, balcony cloth hangers Secunderabad, cloth drying hangers Kompally, ceiling hangers ECIL, cloth hangers Kukatpally, balcony solutions Hitech City, cloth drying hangers Gachibowli, ceiling mounted hangers Madhapur',
    h1: 'Cloth Drying Hangers in Hyderabad & Secunderabad',
    h2: 'Premium Cloth Drying Hangers',
    content: 'Transform your balcony into an efficient drying space with our premium cloth drying hangers. Perfect for apartments and homes across Hyderabad and Secunderabad, our solutions maximize vertical space while providing sturdy support for your laundry needs.',
    features: [
      'Premium Jindal Stainless Steel Build – Made from high-grade stainless steel for superior strength and long-lasting durability',
      'Available Sizes 4feet, 5feet, 6feet, 7feet, 8feet and Each set 6rods',
      'Heavy Load Capacity – Supports up to 50 kg, ideal for drying heavy clothes, bedsheets, and blankets',
      'Adjustable Height System – Smooth pulley mechanism allows easy height adjustment for convenient loading and drying',
      'Weather-Resistant & Rust-Proof – Designed to withstand rain, sun, and humidity, perfect for indoor and outdoor use',
      'Space-Saving Design – Ceiling-mounted structure keeps floors clear and maximizes usable space in balconies and utility areas',
      'Easy Installation – Simple mounting process with minimal tools required',
      'Low Maintenance – Corrosion-resistant materials ensure hassle-free, long-term use',
    ],
    areas: [
      'Kompally', 'ECIL', 'Kukatpally', 'Hitech City', 'Gachibowli',
      'Madhapur', 'Miyapur', 'Ameerpet', 'Begumpet', 'Banjara Hills',
      'Jubilee Hills', 'Manikonda', 'Uppal', 'LB Nagar', 'Tarnaka',
      'Alwal', 'Bowenpally', 'Trimulgherry', 'Sainikpuri', 'Malkajgiri',
    ],
    image: '/images/hero/ceiling-cloth-drying-hangers.jpg',
    products: [
      {
        name: 'Ceiling Cloth Drying Hangers',
        slug: 'ceiling-cloth-drying-hangers',
        description: 'Ceiling cloth drying hangers are a perfect space-saving laundry solution for modern homes, apartments, and flats. Designed with premium stainless steel rods and a strong pulley system, these hangers allow you to dry clothes conveniently without occupying floor space. The adjustable height mechanism makes it easy to raise and lower clothes, ensuring better airflow and faster drying. Ideal for balconies, utility areas, and bathrooms, ceiling cloth drying hangers are rust-resistant, weatherproof, and capable of handling heavy loads. This durable ceiling-mounted clothes drying system is suitable for daily use and offers long-lasting performance with minimal maintenance.',
        image: '/images/products/ceiling-cloth-drying-hangers.jpg',
      },
      {
        name: 'Balcony Cloth Hangers',
        slug: 'balcony-cloth-hangers',
        description: 'Balcony cloth hangers are specially designed to maximize drying space in balconies while keeping the area clean and organized. Made from high-quality stainless steel, these hangers are strong, corrosion-resistant, and built to withstand sun, rain, and wind. The smart design allows clothes to dry evenly with proper air circulation, reducing moisture and odors. Balcony cloth hangers are easy to install and ideal for apartments, homes, and high-rise buildings where space is limited. This practical balcony drying solution helps maintain a clutter-free environment while offering reliable performance for everyday laundry needs.',
        image: '/images/products/balcony-cloth-hangers.jpg',
      },
      {
        name: 'Ceiling Mounted Cloth Hangers',
        slug: 'ceiling-mounted-cloth-hangers',
        description: 'Ceiling mounted cloth hangers provide a modern and efficient way to dry clothes without using valuable floor space. Installed securely on the ceiling, these hangers feature adjustable pulleys that allow smooth height control for easy loading and unloading of clothes. Crafted from durable stainless steel, ceiling mounted cloth hangers are rust-free, long-lasting, and suitable for both indoor and outdoor use. They are ideal for balconies, wash areas, bathrooms, and utility rooms, offering a clean and organized drying solution for homes of all sizes.',
        image: '/images/products/ceiling-mounted-cloth-hangers.jpg',
      },
      {
        name: 'Pulley Cloth Hangers',
        slug: 'pulley-cloth-hangers',
        description: 'Pulley cloth hangers are designed to make clothes drying effortless and efficient with their smooth height-adjustable pulley mechanism. These hangers allow you to easily lift wet clothes up toward the ceiling for faster drying and lower them when needed. Built using premium stainless steel rods and high-strength pulleys, pulley cloth hangers offer excellent load-bearing capacity and durability. Suitable for balconies, indoor spaces, and outdoor areas, they are weather-resistant, easy to operate, and ideal for daily household laundry needs.',
        image: '/images/products/pulley-cloth-hangers.jpg',
      },
    ],
  },
  'wall-mounted-cloth-hangers': {
    slug: 'wall-mounted-cloth-hangers',
    name: 'Wall Mounted Cloth Hangers',
    title: 'Wall Mounted Cloth Hangers in Hyderabad & Secunderabad',
    description: 'Space-saving wall-mounted cloth hangers for balconies in Hyderabad & Secunderabad. Perfect for compact spaces. Free installation, warranty available.',
    keywords: 'wall mounted cloth hangers Hyderabad, wall hangers Secunderabad, balcony wall hangers Kompally, wall mounted hangers ECIL',
    h1: 'Wall Mounted Cloth Hangers in Hyderabad & Secunderabad',
    h2: 'Space-Saving Wall Mounted Cloth Hangers for Balconies',
    content: 'Ideal for compact balconies and limited spaces, our wall-mounted cloth hangers provide efficient drying solutions without taking up floor space. Available across all areas of Hyderabad and Secunderabad.',
    features: [
      'Available Sizes: 4Feet, 5Feet, 6Feet, 7Feet, 8Feet Each Set Of Hangers Was 6 Rods',
      'Jindal Stainless Steel Rods',
      'PVC AND Metal Brackets',
      '3MM & 4MM Rope/ Strings',
      'Compact design',
      'Easy wall mounting',
      'Durable & Strong Materials',
      'Same Day & Free Installation',
    ],
    areas: [
      'Kompally', 'ECIL', 'Kukatpally', 'Hitech City', 'Gachibowli',
      'Madhapur', 'Miyapur', 'Ameerpet', 'Begumpet', 'Banjara Hills',
      'Jubilee Hills', 'Manikonda', 'Uppal', 'LB Nagar', 'Tarnaka',
      'Alwal', 'Bowenpally', 'Trimulgherry', 'Sainikpuri', 'Malkajgiri',
    ],
    image: '/images/hero/wall-mounted-cloth-hangers.jpg',
    products: [
      {
        name: 'Wall Mounted Cloth Hangers',
        slug: 'wall-mounted-cloth-hangers',
        description: 'Our wall mounted cloth hangers are designed to provide a strong, durable, and space-saving cloth drying solution for modern homes. These hangers are securely fixed to the wall, making them ideal for apartments, villas, and compact living spaces where floor space is limited. Made from high-quality stainless steel and weather-resistant materials, wall mounted cloth hangers are suitable for both indoor and outdoor use. They can easily handle daily laundry, heavy clothes, bedsheets, and towels while maintaining a clean and organized look in your home.',
        image: '/images/products/wall-mounted-cloth-hangers.jpg',
      },
      {
        name: 'Wall Mounted Cloth Hangers For Balcony',
        slug: 'wall-mounted-cloth-hangers-for-balcony',
        description: 'Wall mounted cloth hangers for balcony are perfect for drying clothes efficiently without cluttering your balcony area. Designed to withstand sunlight, rain, and wind, these balcony cloth hangers offer long-lasting performance and excellent load-bearing capacity. They allow proper air circulation for faster drying while keeping clothes safe and neatly arranged. Ideal for high-rise apartments and residential buildings, wall mounted balcony cloth hangers help maximize space while maintaining an open and modern balcony appearance.',
        image: '/images/products/wall-mounted-cloth-hangers-for-balcony.jpg',
      },
      {
        name: 'Wall Mounted Cloth Drying Rack',
        slug: 'wall-mounted-cloth-drying-rack',
        description: 'The wall mounted cloth drying rack is an excellent choice for homes that need a flexible and compact drying system. Its foldable and adjustable design allows you to extend the rack when drying clothes and fold it back neatly when not in use. Built using rust-proof and heavy-duty materials, this wall mounted drying rack ensures durability and long-term reliability. It is suitable for balconies, bathrooms, utility areas, and wash zones, making it a practical solution for everyday laundry needs.',
        image: '/images/products/wall-mounted-cloth-drying-rack.jpg',
      },
      {
        name: 'Pully & Dry Cloth Hangers',
        slug: 'pully-dry-cloth-hangers',
        description: 'Our pulley and dry cloth hangers offer a smart and convenient way to dry clothes using an adjustable height pulley system. This design allows you to lower the rods for easy loading and raise them to make better use of sunlight and airflow. Pulley cloth hangers are ideal for balconies, utility areas, and wash spaces, especially in apartments where space optimization is important. Made from premium stainless steel, these pulley drying systems are strong, smooth to operate, and capable of handling heavy laundry loads with ease.',
        image: '/images/products/pully-dry-cloth-hangers.jpg',
      },
    ],
  },
  'invisible-grills': {
    slug: 'invisible-grills',
    name: 'Invisible Grills',
    title: 'Invisible Grills in Hyderabad & Secunderabad',
    description: 'Modern invisible grills for safety without compromising views. Available in Hyderabad & Secunderabad. Free installation and warranty.',
    keywords: 'invisible grills Hyderabad, invisible grills Secunderabad, invisible grills ECIL, safety grills Hitech City, balcony grills Gachibowli, invisible grills Madhapur',
    h1: 'Invisible Grills in Hyderabad & Secunderabad',
    h2: 'Modern Safety Solutions Without Compromising Views',
    content: 'Protect your loved ones with our premium invisible grills in Hyderabad, designed to deliver maximum safety without blocking your view. Our invisible grill systems are made using high-tensile stainless steel cables with anti-rust coating, offering a sleek, modern alternative to traditional iron grills. Ideal for balconies, windows, and high-rise apartments, invisible safety grills ensure child safety, pet safety, and fall protection while maintaining excellent ventilation and aesthetics.\n\nWe provide professional invisible grill installation across all areas of Hyderabad and Secunderabad, including apartments, villas, gated communities, and commercial spaces. With free site inspection, same-day installation, up to 5-year warranty, and expert technicians, we ensure long-lasting safety solutions you can trust. Choose our invisible grills for a clean, modern look that blends perfectly with contemporary homes.',
    features: [
      'Stainless Steel Wire',
      'No Maintenance',
      'High Safety Standards',
      'Weather Resistant',
      'Custom Sizing Available',
      'Easy Maintenance',
    ],
    areas: [
      'Kompally', 'ECIL', 'Kukatpally', 'Hitech City', 'Gachibowli',
      'Madhapur', 'Miyapur', 'Ameerpet', 'Begumpet', 'Banjara Hills',
      'Jubilee Hills', 'Manikonda', 'Uppal', 'LB Nagar', 'Tarnaka',
      'Alwal', 'Bowenpally', 'Trimulgherry', 'Sainikpuri', 'Malkajgiri',
    ],
    image: '/images/hero/invisible-grills.jpg',
    products: [
      {
        name: 'Invisible Grills for Balcony',
        slug: 'invisible-grills-for-balcony',
        description: 'Our Invisible Grills for Balcony are the perfect safety solution for high-rise apartments and open balconies. Designed with high-strength stainless steel cables, these grills prevent accidental falls while keeping your balcony open, airy, and visually appealing. Unlike bulky iron grills, invisible balcony grills provide uninterrupted city views, better airflow, and modern aesthetics.\n\nIdeal for families with children and pets, our balcony invisible grills are weather-resistant, corrosion-proof, and easy to maintain. Professionally installed by trained experts across Hyderabad and Secunderabad, they offer long-term safety without compromising design.',
        image: '/images/products/invisible-grills-for-balcony.jpg',
      },
      {
        name: 'Invisible Safety Grills/Net',
        slug: 'invisible-safety-grills-net',
        description: 'Protect your home without compromising aesthetics with our Invisible Safety Grills and Nets in Hyderabad. Designed for modern apartments, villas, and high-rise buildings, these advanced safety solutions provide strong protection while maintaining uninterrupted views. Manufactured using high-tensile stainless steel cables with anti-rust coating, our invisible safety grills ensure maximum safety for children, pets, and families. The sleek, transparent design blends seamlessly with your interiors and exteriors, making it the preferred choice for premium homes across Hyderabad.',
        image: '/images/products/invisible-safety-grills-net.jpg',
      },
      {
        name: 'Invisible Grills for Windows',
        slug: 'invisible-grills-for-windows',
        description: 'Our Invisible Grills for Windows offer a sophisticated alternative to traditional iron grills. Ideal for apartments and high-rise residences, these grills provide reliable safety while allowing natural light, ventilation, and scenic views to flow freely. Engineered with marine-grade stainless steel wires, they are resistant to corrosion, weather changes, and UV exposure. Perfect for living rooms, bedrooms, and kitchen windows, invisible window grills deliver enhanced safety without blocking visibility or affecting architectural beauty.',
        image: '/images/products/invisible-grills-for-windows.jpg',
      },
      {
        name: 'Premium Invisible Grills in Hyderabad',
        slug: 'premium-invisible-grills-in-hyderabad',
        description: 'Experience unmatched elegance with our Premium Invisible Grills in Hyderabad, crafted for homeowners who demand both safety and style. These grills are designed to meet international safety standards while offering a clean, minimalistic appearance. With professional installation and precision tensioning, our invisible grills provide long-term durability and high load-bearing capacity. Trusted by premium apartments and gated communities across Hyderabad, our invisible grill systems redefine modern home safety.',
        image: '/images/products/premium-invisible-grills-in-hyderabad.jpg',
      },
    ],
  },
  'pigeon-safety-nets': {
    slug: 'pigeon-safety-nets',
    name: 'Pigeon Safety Nets',
    title: 'Pigeon Safety Nets in Hyderabad & Secunderabad',
    description: 'Durable pigeon safety nets to protect your home from pigeons. Installation available in Hyderabad & Secunderabad. Free installation, warranty included.',
    keywords: 'pigeon safety nets Hyderabad, pigeon nets Secunderabad, safety nets Kompally, pigeon protection ECIL',
    h1: 'Pigeon Safety Nets in Hyderabad & Secunderabad',
    h2: 'Protect Your Home from Pigeons',
    content: 'Keep pigeons away from your balconies, windows, and terraces with our durable safety nets. Available across all areas of Hyderabad and Secunderabad with professional installation.',
    features: [
      'UV resistant material',
      'Durable and long-lasting',
      'Transparent design',
      'Easy to clean',
      'Custom fit available',
    ],
    areas: [
      'Kompally', 'ECIL', 'Kukatpally', 'Hitech City', 'Gachibowli',
      'Madhapur', 'Miyapur', 'Ameerpet', 'Begumpet', 'Banjara Hills',
      'Jubilee Hills', 'Manikonda', 'Uppal', 'LB Nagar', 'Tarnaka',
      'Alwal', 'Bowenpally', 'Trimulgherry', 'Sainikpuri', 'Malkajgiri',
    ],
    image: '/images/hero/pigeon-safety-nets.jpg',
    products: [
      {
        name: 'Pigeon Net For Commercial Places',
        slug: 'commercial-pigeon-net',
        description: 'Our pigeon nets for commercial places are engineered to meet the safety and hygiene standards required for offices, IT parks, hospitals, hotels, warehouses, malls, and industrial buildings. Made from UV-stabilized, weather-resistant nylon, these nets prevent pigeons from nesting and damaging property while maintaining a professional appearance. Installed by trained technicians using secure anchoring systems, our commercial pigeon nets in Hyderabad provide reliable, low-maintenance bird control for large and complex structures.',
        image: '/images/products/commercial-pigeon-net.jpg',
      },
      {
        name: 'Pigeon Net for Villas & Independent Houses',
        slug: 'villa-pigeon-net',
        description: 'Enhance the comfort and cleanliness of your home with our pigeon nets for villas and houses. Ideal for terraces, open shafts, staircases, balconies, and windows, these nets blend seamlessly with modern architecture. Our villa pigeon net solutions are custom-measured and carefully installed to preserve the premium look of your property while offering effective protection against pigeons, droppings, and health risks.',
        image: '/images/products/villa-pigeon-net.jpg',
      },
      {
        name: 'Balcony Pigeon Net',
        slug: 'balcony-pigeon-net',
        description: 'Balconies are one of the most common nesting spots for pigeons. Our balcony pigeon nets are designed to be strong yet nearly invisible, allowing fresh air and natural light while keeping birds out. Perfect for apartments and high-rise buildings, these nets help maintain a clean, safe, and usable balcony space. We offer professional balcony pigeon net installation in Hyderabad and Secunderabad, ensuring a neat finish with no damage to walls or railings.',
        image: '/images/products/balcony-pigeon-net.jpg',
      },
      {
        name: 'Apartment Pigeon Net for Safety',
        slug: 'apartment-pigeon-net-for-safety',
        description: 'Ensure complete safety for your family with our apartment pigeon net solutions, especially for homes with children and pets. These nets not only prevent pigeon entry but also add an extra layer of protection for open balconies and windows. Using high-tensile, anti-rust fixtures, our apartment pigeon nets are built for durability, safety, and long-term performance in all weather conditions.',
        image: '/images/products/apartment-pigeon-net-for-safety.jpg',
      },
    ],
  },
  'bamboo-roller-blinds': {
    slug: 'bamboo-roller-blinds',
    name: 'Bamboo / Roller Blinds',
    title: 'Bamboo & Roller Blinds in Hyderabad & Secunderabad',
    description: 'Elegant bamboo and roller blinds for windows in Hyderabad & Secunderabad. Privacy and style combined. Free installation available.',
    keywords: 'bamboo blinds Hyderabad, roller blinds Secunderabad, window blinds Kompally, bamboo blinds ECIL',
    h1: 'Bamboo & Roller Blinds in Hyderabad & Secunderabad',
    h2: 'Elegant Window Solutions',
    content: 'Enhance your home\'s privacy and style with our premium bamboo and roller blinds. Available in various designs and colors across Hyderabad and Secunderabad.',
    features: [
      'Multiple design options',
      'Easy operation',
      'Privacy control',
      'UV protection',
      'Energy efficient',
    ],
    areas: [
      'Kompally', 'ECIL', 'Kukatpally', 'Hitech City', 'Gachibowli',
      'Madhapur', 'Miyapur', 'Ameerpet', 'Begumpet', 'Banjara Hills',
      'Jubilee Hills', 'Manikonda', 'Uppal', 'LB Nagar', 'Tarnaka',
      'Alwal', 'Bowenpally', 'Trimulgherry', 'Sainikpuri', 'Malkajgiri',
    ],
    image: '/images/hero/bamboo-roller-blinds.jpg',
    products: [
      {
        name: 'Bamboo Blinds',
        slug: 'bamboo-blinds',
        description: 'Bamboo blinds bring a natural and elegant touch to your interiors while offering effective sun protection and ventilation. Crafted from high-quality bamboo, these blinds are eco-friendly, durable, and suitable for both indoor and outdoor use. Bamboo blinds are ideal for balconies, windows, patios, and verandas, adding warmth and style to your living spaces. Their breathable design allows fresh air to flow while reducing heat and glare.',
        image: '/images/products/bamboo-blinds.jpg',
      },
      {
        name: 'Roller Blinds',
        slug: 'roller-blinds',
        description: 'Our roller blinds offer a sleek and modern window covering solution for homes, offices, and commercial spaces. Designed to provide smooth operation and excellent light control, roller blinds are ideal for living rooms, bedrooms, offices, and balconies. Made from high-quality fabrics and durable mechanisms, these blinds ensure long-lasting performance with minimal maintenance. Roller blinds enhance privacy while allowing you to adjust natural light according to your comfort, making them a perfect choice for contemporary interiors.',
        image: '/images/products/roller-blinds.jpg',
      },
      {
        name: 'Premium Bamboo Blinds',
        slug: 'premium-bamboo-blinds',
        description: 'Our premium bamboo blinds are designed for customers who value luxury, craftsmanship, and natural aesthetics. Made using carefully selected bamboo with superior finishing, these blinds offer enhanced durability and a refined appearance. Premium bamboo blinds are perfect for villas, luxury apartments, resorts, and high-end commercial spaces. They provide excellent shade, privacy, and temperature control while complementing modern and traditional décor styles.',
        image: '/images/products/premium-bamboo-blinds.jpg',
      },
      {
        name: 'Blackout Roller Blinds',
        slug: 'blackout-roller-blinds',
        description: 'Blackout roller blinds are the ideal solution for complete light control and privacy. Designed to block sunlight effectively, these blinds are perfect for bedrooms, home theatres, offices, and conference rooms. Made from high-density blackout fabric, blackout roller blinds help reduce heat, improve sleep quality, and enhance energy efficiency. Their modern design and smooth operation make them a popular choice for both residential and commercial interiors.',
        image: '/images/products/blackout-roller-blinds.jpg',
      },
    ],
  },
  'shoe-racks': {
    slug: 'shoe-racks',
    name: 'Shoe Racks',
    title: 'Shoe Racks in Hyderabad & Secunderabad',
    description: 'Premium shoe rack solutions for organized footwear storage. Available in Hyderabad & Secunderabad. Free installation included.',
    keywords: 'shoe racks Hyderabad, shoe storage Secunderabad, shoe racks Kompally, shoe organizers ECIL',
    h1: 'Shoe Racks in Hyderabad & Secunderabad',
    h2: 'Organize Your Footwear',
    content: 'Keep your home organized with our premium shoe rack solutions. Available in various sizes and designs across Hyderabad and Secunderabad.',
    features: [
      'Multiple size options',
      'Durable construction',
      'Space efficient',
      'Easy to assemble',
      'Modern designs',
    ],
    areas: [
      'Kompally', 'ECIL', 'Kukatpally', 'Hitech City', 'Gachibowli',
      'Madhapur', 'Miyapur', 'Ameerpet', 'Begumpet', 'Banjara Hills',
      'Jubilee Hills', 'Manikonda', 'Uppal', 'LB Nagar', 'Tarnaka',
      'Alwal', 'Bowenpally', 'Trimulgherry', 'Sainikpuri', 'Malkajgiri',
    ],
    image: '/images/hero/shoe-racks.jpg',
    products: [
      {
        name: 'Standard Shoe Rack',
        slug: 'standard-shoe-rack',
        description: 'Our standard shoe rack is a practical and reliable storage solution designed to keep your footwear neatly organized and easily accessible. Built with sturdy materials and a space-efficient layout, this shoe rack is ideal for homes, apartments, and offices. It helps reduce clutter while protecting shoes from dust and damage. The simple, functional design makes it suitable for entryways, bedrooms, and utility areas, offering long-lasting performance for everyday use.',
        image: '/images/products/standard-shoe-rack.jpg',
      },
      {
        name: 'Premium Shoe Rack',
        slug: 'premium-shoe-rack',
        description: 'The premium shoe rack is designed for homeowners who value both organization and aesthetics. Crafted using high-quality materials and modern finishes, this shoe rack provides superior durability and a stylish appearance. With well-designed compartments and smooth operation, premium shoe racks offer an elegant storage solution for luxury homes, apartments, and villas. They add a sophisticated touch while ensuring footwear remains neatly arranged and easy to access.',
        image: '/images/products/premium-shoe-rack.jpg',
      },
      {
        name: 'Wall Mounted Shoe Rack',
        slug: 'wall-mounted-shoe-rack',
        description: 'The wall mounted shoe rack is a modern, space-saving solution perfect for compact homes and apartments. Installed securely on the wall, it keeps shoes off the floor, making cleaning easier and maintaining a neat appearance. Designed for durability and style, wall mounted shoe racks are ideal for entryways, balconies, and corridors. Their sleek design blends seamlessly with contemporary interiors while maximizing usable space.',
        image: '/images/products/wall-mounted-shoe-rack.jpg',
      },
      {
        name: 'Cabinet Shoe Rack',
        slug: 'cabinet-shoe-rack',
        description: 'Our cabinet shoe rack offers a clean, enclosed storage solution that keeps footwear hidden and protected from dust. Featuring multiple compartments and a sturdy cabinet structure, this shoe rack is ideal for families looking for organized and clutter-free shoe storage. Suitable for living rooms, hallways, and bedrooms, cabinet shoe racks combine functionality with a refined appearance, enhancing the overall look of your home.',
        image: '/images/products/cabinet-shoe-rack.jpg',
      },
    ],
  },
  'anti-bird-spikes': {
    slug: 'anti-bird-spikes',
    name: 'Anti Bird Spikes',
    title: 'Anti Bird Spikes in Hyderabad & Secunderabad',
    description: 'Effective anti-bird spikes for balconies and terraces. Installation available in Hyderabad & Secunderabad. Durable and humane solution.',
    keywords: 'anti bird spikes Hyderabad, bird spikes Secunderabad, bird deterrent Kompally, anti bird spikes ECIL',
    h1: 'Anti Bird Spikes in Hyderabad & Secunderabad',
    h2: 'Effective Bird Deterrent Solutions',
    content: 'Protect your balconies and terraces from birds with our effective anti-bird spikes. Humane and durable solution available across Hyderabad and Secunderabad.',
    features: [
      'Anti Birds solution',
      'Durable materials',
      'Free installation',
      'Weather resistant',
      'Long-lasting',
    ],
    areas: [
      'Kompally', 'ECIL', 'Kukatpally', 'Hitech City', 'Gachibowli',
      'Madhapur', 'Miyapur', 'Ameerpet', 'Begumpet', 'Banjara Hills',
      'Jubilee Hills', 'Manikonda', 'Uppal', 'LB Nagar', 'Tarnaka',
      'Alwal', 'Bowenpally', 'Trimulgherry', 'Sainikpuri', 'Malkajgiri',
    ],
    image: '/images/hero/anti-bird-spikes.jpg',
    products: [
      {
        name: 'Standard Anti Bird Spikes',
        slug: 'standard-anti-bird-spikes',
        description: 'Our Standard Anti Bird Spikes are a cost-effective and efficient solution for everyday pigeon and bird problems. Designed for easy installation and long-term use, they effectively deter pigeons from perching on common surfaces. These spikes are widely used in apartments, independent houses, shops, and office buildings to prevent bird droppings and nesting.',
        image: '/images/products/standard-anti-bird-spikes.jpg',
      },
      {
        name: 'Premium Anti Bird Spikes',
        slug: 'premium-anti-bird-spikes',
        description: 'Premium Anti Bird Spikes are engineered for maximum durability and performance in high-exposure areas. Manufactured using superior materials, they provide strong resistance against weather, corrosion, and UV damage. Ideal for balconies, window ledges, parapet walls, signboards, AC ledges, and rooftops, these spikes offer reliable pigeon control while maintaining a refined, premium appearance.',
        image: '/images/products/premium-anti-bird-spikes.jpg',
      },
      {
        name: 'Stainless Steel Bird Spikes',
        slug: 'stainless-steel-bird-spikes',
        description: 'Stainless Steel Bird Spikes provide the highest level of strength and durability for heavy-duty bird control. Made from high-grade stainless steel, they are rust-proof, weather-resistant, and suitable for long-term outdoor use. These spikes are ideal for commercial buildings, warehouses, hospitals, hotels, and high-rise structures where permanent pigeon prevention is required.',
        image: '/images/products/stainless-steel-bird-spikes.jpg',
      },
      {
        name: 'Transparent Bird Spikes',
        slug: 'transparent-bird-spikes',
        description: 'Transparent Bird Spikes are designed for customers who want effective bird control without affecting the visual appeal of their property. Made from high-quality UV-stabilized polycarbonate, these spikes are nearly invisible from a distance while offering strong protection against pigeons and birds. Perfect for glass façades, balconies, window sills, and modern buildings, they preserve aesthetics while ensuring safety.',
        image: '/images/products/transparent-bird-spikes.jpg',
      },
    ],
  },
  'mosquito-nets': {
    slug: 'mosquito-nets',
    name: 'Mosquito Nets',
    title: 'Mosquito Nets in Hyderabad & Secunderabad',
    description: 'Premium mosquito nets for windows and doors. Protect your family from mosquitoes. Available in Hyderabad & Secunderabad. Free installation.',
    keywords: 'mosquito nets Hyderabad, mosquito nets Secunderabad, window mosquito nets Kompally, mosquito protection ECIL',
    h1: 'Mosquito Nets in Hyderabad & Secunderabad',
    h2: 'Protect Your Family from Mosquitoes',
    content: 'Keep mosquitoes away with our premium mosquito nets for windows and doors. Available across all areas of Hyderabad and Secunderabad with professional installation.',
    features: [
      'Fine mesh design',
      'Easy to install',
      'Durable materials',
      'Easy to clean',
      'Custom sizing',
    ],
    areas: [
      'Kompally', 'ECIL', 'Kukatpally', 'Hitech City', 'Gachibowli',
      'Madhapur', 'Miyapur', 'Ameerpet', 'Begumpet', 'Banjara Hills',
      'Jubilee Hills', 'Manikonda', 'Uppal', 'LB Nagar', 'Tarnaka',
      'Alwal', 'Bowenpally', 'Trimulgherry', 'Sainikpuri', 'Malkajgiri',
    ],
    image: '/images/hero/mosquito-nets.jpg',
    products: [
      {
        name: 'Mosquito Doors For Windows',
        slug: 'window-mosquito-net',
        description: 'Our window mosquito nets provide an effective and long-lasting solution to protect your home from mosquitoes, flies, and insects while allowing fresh air and natural light to flow freely. Designed for modern homes and apartments, these nets are made using high-quality, durable mesh that ensures excellent ventilation without compromising safety. Window mosquito nets are ideal for bedrooms, living rooms, kitchens, and bathrooms, helping maintain a healthy and comfortable indoor environment throughout the year.',
        image: '/images/products/window-mosquito-net.jpg',
      },
      {
        name: 'Mosquito Doors',
        slug: 'door-mosquito-net',
        description: 'Mosquito net for doors',
        image: '/images/products/door-mosquito-net.jpg',
      },
      {
        name: 'Sliding Mosquito Doors For Balcony',
        slug: 'premium-window-mosquito-net',
        description: 'Our sliding mosquito doors for balcony are the perfect solution for keeping mosquitoes, flies, and insects out while allowing fresh air and natural light into your home. Designed for modern apartments and high-rise buildings, these mosquito doors move smoothly along a sliding track, making them easy to open and close without occupying extra space. The sleek design blends seamlessly with contemporary balcony doors, maintaining both functionality and aesthetics.\n\nManufactured using high-quality aluminum frames and durable mosquito mesh, sliding mosquito doors for balconies are built for long-term use and daily operation. They are weather-resistant, low maintenance, and ideal for Indian climatic conditions. Whether for apartments, villas, or independent houses, these balcony mosquito doors provide effective insect protection without blocking ventilation or views.\n\nProfessionally installed for a perfect fit, our sliding mosquito doors ensure complete coverage and a neat finish. They are especially suitable for large balcony openings and sliding mesh doors, offering a clean, modern, and practical solution for insect-free living.',
        image: '/images/products/premium-window-mosquito-net.jpg',
      },
      {
        name: 'Sliding Door Mosquito Net',
        slug: 'sliding-door-mosquito-net',
        description: 'The sliding door mosquito net is a premium solution for large openings such as balcony doors, patio doors, and French windows. Designed to move smoothly along tracks, sliding mosquito nets provide seamless protection without affecting movement or visibility. Made from weather-resistant materials, these nets are ideal for high-traffic areas and are widely used in apartments and villas. Sliding door mosquito nets offer a perfect balance of safety, airflow, and modern aesthetics.',
        image: '/images/products/sliding-door-mosquito-net.jpg',
      },
    ],
  },
  'outdoor-indoor-gaming-nets': {
    slug: 'outdoor-indoor-gaming-nets',
    name: 'Outdoor & Indoor Gaming Nets',
    title: 'Gaming Nets in Hyderabad & Secunderabad',
    description: 'Outdoor and indoor gaming nets for sports enthusiasts. Available in Hyderabad & Secunderabad. Professional installation available.',
    keywords: 'gaming nets Hyderabad, sports nets Secunderabad, outdoor gaming nets Kompally, indoor gaming nets ECIL',
    h1: 'Outdoor & Indoor Gaming Nets in Hyderabad & Secunderabad',
    h2: 'Sports Nets for Enthusiasts',
    content: 'Create your perfect sports space with our outdoor and indoor gaming nets. Available for various sports across Hyderabad and Secunderabad.',
    features: [
      'Multiple sports options',
      'Durable materials',
      'Professional installation',
      'Custom sizing',
      'Weather resistant (outdoor)',
    ],
    areas: [
      'Kompally', 'ECIL', 'Kukatpally', 'Hitech City', 'Gachibowli',
      'Madhapur', 'Miyapur', 'Ameerpet', 'Begumpet', 'Banjara Hills',
      'Jubilee Hills', 'Manikonda', 'Uppal', 'LB Nagar', 'Tarnaka',
      'Alwal', 'Bowenpally', 'Trimulgherry', 'Sainikpuri', 'Malkajgiri',
    ],
    image: '/images/hero/outdoor-indoor-gaming-nets.jpg',
    products: [
      {
        name: 'Cricket Net',
        slug: 'cricket-net',
        description: 'We provide high-quality cricket net installations for practice grounds, training academies, schools, and recreational spaces. Designed to withstand repeated ball impact, our cricket nets offer excellent strength, flexibility, and durability. Whether for indoor practice or outdoor training, these nets help improve player safety and protect surrounding areas from damage.',
        image: '/images/products/cricket-net.jpg',
      },
      {
        name: 'Box Cricket net in Hyderabad',
        slug: 'box-cricket-net-in-hyderabad',
        description: 'Our Box Cricket Net installation services in Hyderabad are designed to create safe, durable, and professional playing environments for schools, sports academies, residential societies, and commercial sports arenas. Built using high-strength, weather-resistant netting, box cricket nets ensure player safety while preventing balls from leaving the play area. Suitable for rooftops, open grounds, terraces, and indoor spaces, our cricket net solutions are engineered for long-term performance and reliability.',
        image: '/images/products/box-cricket-net-in-hyderabad.jpg',
      },
      {
        name: 'Outdoor Box Net',
        slug: 'outdoor-box-net',
        description: 'Our outdoor box nets are ideal for open areas such as terraces, playgrounds, residential compounds, and commercial sports facilities. Made from UV-stabilized and weather-resistant materials, these nets perform reliably under sun, rain, and wind conditions. Outdoor box nets provide a secure enclosure for cricket and other sports while maintaining proper visibility and ventilation.',
        image: '/images/products/outdoor-box-net.jpg',
      },
      {
        name: 'Multi-Sport Net',
        slug: 'multi-sport-net',
        description: 'Our multi-sport nets are designed for versatile use, supporting cricket, football, badminton, volleyball, and other recreational sports. These nets are suitable for schools, colleges, sports complexes, and gated communities looking for a flexible sports solution. With strong anchoring and professional installation, multi-sport nets ensure safety, durability, and long-term usability.',
        image: '/images/products/multi-sport-net.jpg',
      },
    ],
  },
}

export function getCategoryData(slug: string): CategoryData {
  return categories[slug] || categories['ceiling-cloth-drying-hangers']
}

export function getAllCategories(): CategoryData[] {
  return Object.values(categories)
}

