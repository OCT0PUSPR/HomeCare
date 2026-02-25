#!/bin/bash
# Download images from Unsplash for Emirates Home Care website
# Extracts og:image URL, strips watermark params, downloads clean image

download_unsplash() {
  local photo_id="$1"
  local output_path="$2"
  local width="${3:-800}"
  local height="${4:-600}"

  if [ -f "$output_path" ]; then
    echo "SKIP: $output_path already exists"
    return 0
  fi

  echo "Downloading $photo_id -> $output_path"

  # Get the og:image URL from the photo page
  local og_url=$(curl -sL "https://unsplash.com/photos/$photo_id" | grep -o 'og:image" content="[^"]*"' | head -1 | sed 's/og:image" content="//;s/"$//')

  if [ -z "$og_url" ]; then
    echo "  ERROR: Could not extract og:image for $photo_id"
    return 1
  fi

  # Extract base URL (before query params) and decode HTML entities
  local base_url=$(echo "$og_url" | sed 's/&amp;/\&/g' | cut -d'?' -f1)

  # Download with clean params (no watermark)
  curl -sL "${base_url}?w=${width}&h=${height}&fit=crop&q=80&auto=format" -o "$output_path"

  if [ -f "$output_path" ] && [ -s "$output_path" ]; then
    local size=$(stat -c%s "$output_path" 2>/dev/null || stat -f%z "$output_path" 2>/dev/null)
    echo "  OK: $output_path (${size} bytes)"
  else
    echo "  ERROR: Download failed for $photo_id"
    rm -f "$output_path"
    return 1
  fi
}

BASE="public/images"

echo "=== DOWNLOADING SERVICE IMAGES ==="
# Newborn & Mother Care - mother with newborn baby
download_unsplash "a-woman-holding-a-baby-in-a-hospital-bed-w8sQu8-YuRE" "$BASE/services/newborn-care.jpg" 800 600

# Child Care - woman and child playing
download_unsplash "a-woman-and-child-playing-with-toys-on-the-floor-lNX8yUglO60" "$BASE/services/child-care.jpg" 800 600

# Senior Care - caregiver with elderly woman
download_unsplash "smiling-nurse-helping-senior-lady-to-walk-around-the-nursing-home-portrait-of-happy-female-caregiver-and-senior-woman-walking-together-at-home-professional-caregiver-taking-care-of-elderly-woman-RUqbxv_X2Kw" "$BASE/services/senior-care.jpg" 800 600

# Clinical Care - doctor with patient
download_unsplash "doctor-and-nurse-examining-a-woman-patient-in-hospital-midsection-88PV9myZAug" "$BASE/services/clinical-care.jpg" 800 600

# Transitional Care - healthcare worker with wheelchair patient
download_unsplash "a-healthcare-worker-and-senior-patient-in-wheelchair-in-hospital-or-at-home-talking-_v0rSVQoLE0" "$BASE/services/transitional-care.jpg" 800 600

# Palliative Care - patient comfort and support
download_unsplash "happy-patient-sitting-on-the-bench-and-holding-caregiver-for-a-hand-while-spending-time-together-outside-lBJT6tSWhkM" "$BASE/services/palliative-care.jpg" 800 600

# Physiotherapy - patient doing physio
download_unsplash "patient-at-home-doing-physiotherapy-with-dumbbell-xBJJ5a0w7WQ" "$BASE/services/physiotherapy.jpg" 800 600

# Lymphatic Drainage - massage therapy
download_unsplash "man-massaging-womans-body-a9pFSC8dTlo" "$BASE/services/lymphatic-drainage.jpg" 800 600

# Speech Therapy - doctor listening to patient
download_unsplash "a-doctor-listening-to-a-patient-with-a-stethoscope-0brH8nlXv0M" "$BASE/services/speech-therapy.jpg" 800 600

# IV Drip - doctor administering injection
download_unsplash "doctor-administers-injection-to-patient-in-hospital-room-bM4MXYPY61U" "$BASE/services/iv-drip.jpg" 800 600

# Lab Collection - doctor holding blood test tube
download_unsplash "cropped-shot-of-female-doctor-holding-blood-test-tube-in-blurred-laboratory-background-in-hospital-2VzKNM_Orck" "$BASE/services/lab-collection.jpg" 800 600

# Doctor on Call - female doctor portrait with stethoscope
download_unsplash "portrait-of-a-young-female-doctor-with-stethoscope-QQhfVEH1exk" "$BASE/services/doctor-on-call.jpg" 800 600


echo ""
echo "=== DOWNLOADING HERO IMAGE ==="
download_unsplash "portrait-of-smiling-doctor-attending-patient-appointment-medical-care-and-service-concept-WfQ95b-6WN0" "$BASE/hero/hero-home.jpg" 1200 800


echo ""
echo "=== DOWNLOADING ABOUT IMAGES ==="
download_unsplash "a-friendly-female-doctor-talking-to-senior-patient-in-bed-in-hospital-2ofIv1WGCb8" "$BASE/about/our-story.jpg" 800 600


echo ""
echo "=== DOWNLOADING TEAM IMAGES ==="
# Female team members
download_unsplash "portrait-of-successful-female-doctor-on-background-of-colleagues-medical-education-concept-AoauUcPFyt8" "$BASE/team/team-1.jpg" 400 500

download_unsplash "beautiful-malay-lady-doctor-wearing-hijab-eyeglasses-and-stethoscope-outside-modern-clinic-closeup-portrait-of-friendly-smiling-confident-muslim-female-doctor-in-scrubs-standing-outdoors-rPeDLFrYTFo" "$BASE/team/team-2.jpg" 400 500

download_unsplash "young-female-doctor-and-senior-man-communicating-in-a-waiting-room-at-hospital-medicine-healthcare-and-people-concept-doctor-and-patient-meeting-at-hospital--AKXK3bpMyo" "$BASE/team/team-3.jpg" 400 500

download_unsplash "woman-doctor-in-medical-white-coat-gloves-and-protective-face-mask-hold-syringe-with-covid-19-vaccine-nurse-preparing-to-inject-patient-in-clinic-or-hospital-standing-isolated-on-studio-background-yawhOog1VxM" "$BASE/team/team-4.jpg" 400 500

download_unsplash "doctor-wearing-a-stethoscope-sits-at-a-desk-JJEOuvnY1Tw" "$BASE/team/team-5.jpg" 400 500

# Male team members
download_unsplash "doctor-working-in-the-hospital-DhpKsjPMPag" "$BASE/team/team-6.jpg" 400 500

download_unsplash "general-practitioner-taking-patient-to-attend-consultation-young-man-sitting-in-health-center-lobby-person-with-disease-meeting-with-doctor-to-cure-illness-and-receive-treatment-handheld-shot-S5dNIH2wGz4" "$BASE/team/team-7.jpg" 400 500


echo ""
echo "=== DOWNLOADING BLOG IMAGES ==="
# Pregnancy symptoms blog
download_unsplash "pregnant-woman-holding-ultrasound-baby-image-close-up-of-pregnant-belly-and-sonogram-photo-in-hands-of-mother-concept-of-pregnancy-gynecology-medical-test-maternal-health-2hZYI5sy1O8" "$BASE/blog/blog-pregnancy-symptoms.jpg" 800 500

# Pregnancy essentials blog
download_unsplash "gorgeous-pregnant-woman-posing-in-sunny-park-holding-her-belly-waiting-for-childbirth-gentle-sweet-moment-of-future-parenthood-concept-Y4IQsTsHufQ" "$BASE/blog/blog-pregnancy-essentials.jpg" 800 500

# Stem cell / Whartons Jelly blog
download_unsplash "a-person-holding-a-test-tube-filled-with-blood-o95-QzCt9q4" "$BASE/blog/blog-stem-cell.jpg" 800 500

# Cord blood banking blog
download_unsplash "a-hand-in-blue-gloves-holding-a-blood-test-tube-D3tcEsCfg9k" "$BASE/blog/blog-cord-blood.jpg" 800 500

# Physiotherapy blog
download_unsplash "body-massage-jmRbgqXLCI0" "$BASE/blog/blog-physiotherapy.jpg" 800 500

# Babysitting services blog
download_unsplash "a-group-of-children-sitting-around-a-kitchen-table-s5o34MjhCRQ" "$BASE/blog/blog-babysitting.jpg" 800 500


echo ""
echo "=== DOWNLOADING EVENT IMAGES ==="
# Christmas festive market event
download_unsplash "purple-and-white-flower-garden--LiPS85csDM" "$BASE/events/event-christmas.jpg" 800 500

# Polo & Equestrian Club event
download_unsplash "aerial-photo-of-city-highway-surrounded-by-high-rise-buildings-Fr6zexbmjmc" "$BASE/events/event-polo.jpg" 800 500

# British Mums Breakfast event
download_unsplash "a-group-of-children-playing-with-toys-on-the-floor-1w20Cysy1cg" "$BASE/events/event-breakfast.jpg" 800 500


echo ""
echo "=== DONE ==="
echo "All downloads complete!"
ls -la $BASE/services/ $BASE/team/ $BASE/blog/ $BASE/events/ $BASE/hero/ $BASE/about/
