

---

# 🗳️ **Anantya - Voter ID Verification System**

Anantya is a secure and scalable web-based voter authentication system that verifies voter information by scanning Voter ID. The system uses the **Google Vision API** to extract and validate voter details, ensuring reliable voter verification. 

---

## 🚀 **Project Overview**
Anantya aims to streamline the voter verification process by combining Voter lD scanning, AI-based data extraction, and cloud-based storage to prevent duplicate voting. 

### 🎯 **Objectives:**
- Enhance the voter verification process by automating data extraction.
- Prevent duplicate voting using cloud-stored voter information.
- Ensure a secure and seamless user experience.

---

## 🔥 **Key Features**
### ✅ **Voter ID Scanning**
- Extracts Voter ID information accurately from the scanned ID.
- Real-time processing with high accuracy.

### 🧠 **Google Vision API Integration**
- Recognizes and extracts data from the  voter ID.
- Auto-fills voter information based on the scanned data.

### 📊 **Admin Dashboard**
- Displays voter statistics, verification results, and admin insights.
- Real-time updates to track scanned and verified IDs.

### ☁️ **Cloud Database Storage**
- Prevents multiple voting by securely storing voter data.
- Ensures high performance and data integrity.

### 🚀 **CDN Support**
- Improves scalability and performance across multiple devices.
- Handles high traffic loads efficiently.

---

## 🔐 **Security Highlights**
- **Biometric Authentication:** Supports future integration for fingerprint or facial recognition.
- **Duplicate Voting Prevention:** Automatically flags and blocks duplicate voter attempts.
- **Encrypted Data Storage:** Ensures secure storage of sensitive voter information.

---

## 🛠️ **Tech Stack**
### 📄 **Frontend:**
- HTML5, CSS3, JavaScript (ES6+)
- Bootstrap for responsive design

### ⚙️ **Backend:**
- Node.js and Express.js for server-side functionality
- EJS for rendering dynamic web pages

### 📡 **API Integration:**
- Google Vision API for QR code and text extraction

### 💾 **Database:**
- MongoDB for cloud-based data storage

---

## 📚 **Project Structure**
```
/Anantya
├── /html                # Contains all HTML/EJS files
├── /public
│   ├── /css            # CSS and stylesheets
│   └── /js             # JavaScript and frontend logic
├── /views              # EJS templates            
├── server.js           # Main server file
└── /README.md          # Project documentation
```

---

## 📝 **How It Works**
1. **Scan the Voter ID:**  
   The system scans the Voter ID using the Google Vision API.
2. **Extract Information:**  
   Extracted data is stored in the Anantya's Database.
3. **Verify Voter Data:**  
   Cross-check the extracted information with the election system's database.
4. **Prevent Duplicate Voting:**  
   If the voter ID is already scanned, it flags the attempt.

---

## 📥 **Installation and Setup**
### ⚡️ **Prerequisites:**
- Node.js and npm installed
- MongoDB instance running locally or in the cloud

### 🔧 **Step-by-Step Guide:**
1. **Clone the Repository:**
```bash
git clone https://github.com/your-username/Anantya.git
```
2. **Navigate to the Project Directory:**
```bash
cd Anantya
```
3. **Install Dependencies:**
```bash
npm install
```
4. **Set Up Environment Variables:**
- Create a `.env` file in the root directory.
- Add the following variables:
```
GOOGLE_VISION_API_KEY=your_api_key
MONGO_URI=your_mongo_db_uri
```
5. **Start the Server:**
```bash
npm start
```
6. **Access the Application:**
```
http://localhost:3000
```

---

## 🧪 **Testing the Application**
- Scan multiple Voter ID cards to verify accuracy. Currently the protoype is able to scan the Voter ID by uploading the voter id image as jpg.
- Check the admin dashboard for real-time updates.

---

## 🛡️ **Future Enhancements**
- 📱 **Mobile App Integration:** Extend functionality to mobile devices.
- 📸 **Biometric Verification:** Add fingerprint and facial recognition support.
- 📢 **Multilingual Support:** Provide an interface in multiple languages.

---

## 🤝 **Contributing**
We welcome contributions to improve Anantya!  
To contribute:
1. Fork the repository.
2. Create a new branch:
```bash
git checkout -b feature-name
```
3. Make your changes and commit them:
```bash
git commit -m "Add feature: feature-name"
```
4. Push to your fork:
```bash
git push origin feature-name
```
5. Create a pull request.

---

## 📄 **License**
This project is licensed under the [MIT License](LICENSE).

---

## 📞 **Contact**
For queries or support, please contact:  
**Dushyant Makwana**  
📧 Email: dushyantmakwana2004@example.com  
🔗 GitHub: [github.com/dushyantmak85](https://github.com/dushyantmak85)

---
