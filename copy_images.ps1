$brainPath = "C:\Users\govin\.gemini\antigravity\brain\de8cc220-90c0-4ecb-b8f4-ee51e1890cc2"
$assetsPath = "d:\RealStateWeb\src\assets"

$mappings = @{
    "hero_luxury_villa_1777010627664.png" = "hero1.png"
    "hero_commercial_skyline_1777010646533.png" = "hero2.png"
    "hero_modern_interior_1777010662382.png" = "hero3.png"
    "hero_premium_land_1777010684459.png" = "hero4.png"
    "comm_property_1777010706116.png" = "comm.png"
    "office_space_1777010722851.png" = "off.png"
    "agent_consultant_1777010740266.png" = "agent.png"
    "res_property_new_1777010762215.png" = "res.png"
    "legal_advocate_1777010780449.png" = "legal.png"
    "investor_event_gala_1777010796522.png" = "event.png"
    "about_interior_2_1777010811049.png" = "about-img.png"
    "institutional_access_img_1777010835196.png" = "institutional.png"
    "predictive_analytics_img_1777010850211.png" = "analytics.png"
    "infrastructure_img_1777010865420.png" = "infrastructure.png"
    "market_insights_legal_main_1777010882632.png" = "legal_main.png"
    "trump_tower_2_gurgaon_1777010977935.png" = "prop1.png"
    "m3m_luxury_noida_1777010993600.png" = "prop2.png"
}

foreach ($src in $mappings.Keys) {
    $dest = $mappings[$src]
    $srcPath = Join-Path $brainPath $src
    $destPath = Join-Path $assetsPath $dest
    Copy-Item -Path $srcPath -Destination $destPath -Force
    Write-Host "Copied $src to $dest"
}

Write-Host "All images copied successfully!"
