#!/bin/bash
# Download images from Pexels for Emirates Home Care website
# Pexels CDN: https://images.pexels.com/photos/{id}/pexels-photo-{id}.jpeg?auto=compress&cs=tinysrgb&w=800

BASE="public/images"

download_pexels() {
  local id="$1"
  local output="$2"
  local width="${3:-800}"
  local height="${4:-600}"

  if [ -f "$output" ] && [ -s "$output" ]; then
    echo "SKIP: $output already exists"
    return 0
  fi

  echo "Downloading pexels/$id -> $output"
  local url="https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}&h=${height}&fit=crop"
  curl -sL "$url" -o "$output"

  if [ -f "$output" ] && [ -s "$output" ]; then
    local size=$(wc -c < "$output")
    echo "  OK: ${size} bytes"
  else
    echo "  FAIL - trying alternate format..."
    # Try without height constraint
    curl -sL "https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}" -o "$output"
    if [ -f "$output" ] && [ -s "$output" ]; then
      local size=$(wc -c < "$output")
      echo "  OK (alt): ${size} bytes"
    else
      echo "  ERROR: Download failed"
      rm -f "$output"
    fi
  fi
}

echo "=== SERVICE IMAGES ==="
# Newborn & Mother Care
download_pexels 6849309 "$BASE/services/newborn-care.jpg" 800 600

# Child Care - kids at daycare
download_pexels 8535592 "$BASE/services/child-care.jpg" 800 600

# Senior Care - caregiver with elderly
download_pexels 7551667 "$BASE/services/senior-care.jpg" 800 600

# Clinical Care - doctors in hospital
download_pexels 6129507 "$BASE/services/clinical-care.jpg" 800 600

# Transitional Care - doctor with patient
download_pexels 7659564 "$BASE/services/transitional-care.jpg" 800 600

# Palliative Care - patient care comfort
download_pexels 7551616 "$BASE/services/palliative-care.jpg" 800 600

# Physiotherapy - physical therapy session
download_pexels 6111585 "$BASE/services/physiotherapy.jpg" 800 600

# Speech Therapy - therapy session
download_pexels 7176302 "$BASE/services/speech-therapy.jpg" 800 600

# IV Drip - nurse connecting IV
download_pexels 14829646 "$BASE/services/iv-drip.jpg" 800 600

# Lab Collection - blood test
download_pexels 3908179 "$BASE/services/lab-collection.jpg" 800 600

# Doctor on Call - doctor portrait
download_pexels 6129500 "$BASE/services/doctor-on-call.jpg" 800 600

echo ""
echo "=== HERO IMAGE ==="
download_pexels 3259629 "$BASE/hero/hero-home.jpg" 1400 700

echo ""
echo "=== ABOUT IMAGE ==="
download_pexels 3279196 "$BASE/about/our-story.jpg" 800 600

echo ""
echo "=== TEAM HEADSHOTS ==="
# Female team members (5)
# 1. Alka - General Manager
download_pexels 5452201 "$BASE/team/team-1.jpg" 400 500

# 2. Sheida - Speech Pathologist
download_pexels 5452293 "$BASE/team/team-2.jpg" 400 500

# 3. Kavita - Physiotherapist
download_pexels 5407206 "$BASE/team/team-3.jpg" 400 500

# 4. Hannah - Nurse
download_pexels 5214958 "$BASE/team/team-4.jpg" 400 500

# 5. Ann - Nurse
download_pexels 5215024 "$BASE/team/team-5.jpg" 400 500

# Male team members (2)
# 6. Archi - Physiotherapist
download_pexels 5452268 "$BASE/team/team-6.jpg" 400 500

# 7. Noel - Newborn Care Specialist
download_pexels 5327585 "$BASE/team/team-7.jpg" 400 500

echo ""
echo "=== BLOG IMAGES ==="
# Pregnancy symptoms
download_pexels 3662948 "$BASE/blog/blog-pregnancy-symptoms.jpg" 800 500

# Pregnancy essentials
download_pexels 1556658 "$BASE/blog/blog-pregnancy-essentials.jpg" 800 500

# Stem cell / Wharton's Jelly
download_pexels 4226912 "$BASE/blog/blog-stem-cell.jpg" 800 500

# Cord blood banking
download_pexels 4226770 "$BASE/blog/blog-cord-blood.jpg" 800 500

# Physiotherapy blog
download_pexels 5473186 "$BASE/blog/blog-physiotherapy.jpg" 800 500

# Babysitting services blog
download_pexels 3661268 "$BASE/blog/blog-babysitting.jpg" 800 500

echo ""
echo "=== EVENT IMAGES ==="
# Christmas festive market
download_pexels 6544328 "$BASE/events/event-christmas.jpg" 800 500

# Polo & Equestrian Club
download_pexels 1524620 "$BASE/events/event-polo.jpg" 800 500

# British Mums Breakfast
download_pexels 3810795 "$BASE/events/event-breakfast.jpg" 800 500

echo ""
echo "=== CHECKING RESULTS ==="
echo "Services:"
ls -la "$BASE/services/"
echo ""
echo "Team:"
ls -la "$BASE/team/"
echo ""
echo "Blog:"
ls -la "$BASE/blog/"
echo ""
echo "Events:"
ls -la "$BASE/events/"
echo ""
echo "Hero:"
ls -la "$BASE/hero/"
echo ""
echo "About:"
ls -la "$BASE/about/"
echo ""
echo "DONE!"
