import React from "react";
function Home() {
    const url = "https://blogs.mastechinfotrellis.com/hubfs/AI%20for%20Fraud%20Detection-Use%20Case.jpg"
    return (
        <div className="home">
            <div className="intro">
                <div className="image">
                    <img src={url} alt="img" />
                </div>
                <div className="content">
                    <h2>FraudShield: Your Guardian Angel Against Deceptive Transactions.</h2>

                    <p>FraudShield, the innovative fraud detection solution, empowers businesses to swiftly identify and thwart deceptive transactions. With unparalleled accuracy and proactive monitoring, FraudShield fortifies your defenses, ensuring fraudsters never slip through the cracks. Protect your assets and reputation with FraudShield.</p>

                    <h3>Why Detecting Frauds:</h3>
                    <ul>
                        <li><strong>Financial Loss Prevention:</strong> Stops unauthorized transactions, mitigates losses, and protects assets, safeguarding individuals and businesses from significant financial harm.</li>

                        <li><strong>Maintaining Trust and Reputation:</strong>Preserves customer confidence, demonstrates security commitment, and upholds regulatory standards, fostering trust and maintaining organizational credibility.</li>

                        <li><strong>Compliance and Regulatory Requirements:</strong>Ensures adherence to industry standards, avoids legal consequences, and mitigates penalties, safeguarding against financial and reputational damage.</li>
                    </ul>

                    <h3>How We Can Help:</h3>
                    <p>FraudShield plays a crucial role in safeguarding society's financial well-being by combating fraudulent transactions, thereby protecting individuals, businesses, and the integrity of the financial system. Through advanced detection mechanisms, we contribute to a safer and more secure environment, fostering trust and confidence in financial transactions. By preventing financial losses and preserving the reputation of businesses, our product promotes economic stability and ensures that resources are used efficiently for the benefit of all.</p>
                </div>
            </div>
        </div>

    )
}

export default Home;