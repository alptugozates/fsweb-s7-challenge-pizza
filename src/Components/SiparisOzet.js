import React, { useEffect } from "react";
import "./SiparisOzet.css";



const SiparisOzet = ({ siparis }) => {



    useEffect(() => {
        console.log("siparisdata: ", siparis);
    }, [siparis])

    return (

        <div className="order-container">

            <div className="order-done">
                <h1>Teknolojik Yemekler</h1>
                <p className="lezzetin-yolda">lezzetin yolda</p>
                <p className="siparis-alindi">SİPARİŞ ALINDI</p>
                <hr className="divider" />
                <br />
                <h3 > Position Absolute Acı Pizza</h3>
                <p>Boyut: {siparis.pizzaBoyut}</p>
                <p>Hamur: {siparis.pizzaKenar}</p>
                <p>Ek Malzemeler: {siparis.ekMalzeme}</p>
                <div className="siparis-ozet">
                    <h3>Sipariş Toplamı</h3>
                    <p> Seçimler:{" "}
                        {siparis.ekMalzeme
                            ? (siparis.ekMalzeme.length * siparis.ekMalzemeFiyat * siparis.siparisAdet) : 0}
                        ₺</p>
                    <p>Toplam: {" "}
                        {(siparis.pizzaFiyat * siparis.siparisAdet) +
                            siparis.ekMalzeme ?
                            siparis.ekMalzeme.length * siparis.ekMalzemeFiyat * siparis.siparisAdet : 0}₺</p>
                </div>
            </div>
        </div>




    )
};
export default SiparisOzet;