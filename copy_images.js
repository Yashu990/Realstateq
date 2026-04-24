const fs = require('fs');
const path = require('path');

const mappings = [
  { src: 'C:\\Users\\govin\\.gemini\\antigravity\\brain\\de8cc220-90c0-4ecb-b8f4-ee51e1890cc2\\hero_luxury_villa_1777010627664.png', dest: 'src/assets/hero1.png' },
  { src: 'C:\\Users\\govin\\.gemini\\antigravity\\brain\\de8cc220-90c0-4ecb-b8f4-ee51e1890cc2\\hero_commercial_skyline_1777010646533.png', dest: 'src/assets/hero2.png' },
  { src: 'C:\\Users\\govin\\.gemini\\antigravity\\brain\\de8cc220-90c0-4ecb-b8f4-ee51e1890cc2\\hero_modern_interior_1777010662382.png', dest: 'src/assets/hero3.png' },
  { src: 'C:\\Users\\govin\\.gemini\\antigravity\\brain\\de8cc220-90c0-4ecb-b8f4-ee51e1890cc2\\hero_premium_land_1777010684459.png', dest: 'src/assets/hero4.png' },
  { src: 'C:\\Users\\govin\\.gemini\\antigravity\\brain\\de8cc220-90c0-4ecb-b8f4-ee51e1890cc2\\comm_property_1777010706116.png', dest: 'src/assets/comm.png' },
  { src: 'C:\\Users\\govin\\.gemini\\antigravity\\brain\\de8cc220-90c0-4ecb-b8f4-ee51e1890cc2\\office_space_1777010722851.png', dest: 'src/assets/off.png' },
  { src: 'C:\\Users\\govin\\.gemini\\antigravity\\brain\\de8cc220-90c0-4ecb-b8f4-ee51e1890cc2\\agent_consultant_1777010740266.png', dest: 'src/assets/agent.png' },
  { src: 'C:\\Users\\govin\\.gemini\\antigravity\\brain\\de8cc220-90c0-4ecb-b8f4-ee51e1890cc2\\res_property_new_1777010762215.png', dest: 'src/assets/res.png' },
  { src: 'C:\\Users\\govin\\.gemini\\antigravity\\brain\\de8cc220-90c0-4ecb-b8f4-ee51e1890cc2\\legal_advocate_1777010780449.png', dest: 'src/assets/legal.png' },
  { src: 'C:\\Users\\govin\\.gemini\\antigravity\\brain\\de8cc220-90c0-4ecb-b8f4-ee51e1890cc2\\investor_event_gala_1777010796522.png', dest: 'src/assets/event.png' },
  { src: 'C:\\Users\\govin\\.gemini\\antigravity\\brain\\de8cc220-90c0-4ecb-b8f4-ee51e1890cc2\\about_interior_2_1777010811049.png', dest: 'src/assets/about-img.png' },
  { src: 'C:\\Users\\govin\\.gemini\\antigravity\\brain\\de8cc220-90c0-4ecb-b8f4-ee51e1890cc2\\institutional_access_img_1777010835196.png', dest: 'src/assets/institutional.png' },
  { src: 'C:\\Users\\govin\\.gemini\\antigravity\\brain\\de8cc220-90c0-4ecb-b8f4-ee51e1890cc2\\predictive_analytics_img_1777010850211.png', dest: 'src/assets/analytics.png' },
  { src: 'C:\\Users\\govin\\.gemini\\antigravity\\brain\\de8cc220-90c0-4ecb-b8f4-ee51e1890cc2\\infrastructure_img_1777010865420.png', dest: 'src/assets/infrastructure.png' },
  { src: 'C:\\Users\\govin\\.gemini\\antigravity\\brain\\de8cc220-90c0-4ecb-b8f4-ee51e1890cc2\\market_insights_legal_main_1777010882632.png', dest: 'src/assets/legal_main.png' },
  { src: 'C:\\Users\\govin\\.gemini\\antigravity\\brain\\de8cc220-90c0-4ecb-b8f4-ee51e1890cc2\\trump_tower_2_gurgaon_1777010977935.png', dest: 'src/assets/prop1.png' },
  { src: 'C:\\Users\\govin\\.gemini\\antigravity\\brain\\de8cc220-90c0-4ecb-b8f4-ee51e1890cc2\\m3m_luxury_noida_1777010993600.png', dest: 'src/assets/prop2.png' }
];

mappings.forEach(m => {
  try {
    fs.copyFileSync(m.src, path.join(process.cwd(), m.dest));
    console.log(`Copied: ${m.dest}`);
  } catch (err) {
    console.error(`Error copying ${m.dest}:`, err.message);
  }
});
