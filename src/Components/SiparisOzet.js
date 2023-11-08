import React from "react";
import "./SiparisOzet.css";

const SiparisOzet = (props) => {
    const { formData, pizzaBoyut, pizzaKenar, ekMalzeme, siparisAdet, pizzaFiyat } = props;

    return (


        <div className="order-done">
            <h1>Teknolojik Yemekler</h1>
            <p className="lezzetin-yolda">lezzetin yolda</p>
            <p className="siparis-alindi">SİPARİŞ ALINDI</p>
            <hr className="divider" />
            <br />
            <h3 > Position Absolute Acı Pizza</h3>
            <p>Boyut: {pizzaBoyut}</p>
            <p>Hamur: {pizzaKenar}</p>
            <p>Ek Malzemeler: {ekMalzeme}</p>
            <div className="siparis-ozet">
                <h3>Sipariş Toplamı</h3>
                <p>Seçimler: {siparisAdet}</p>
                <p>Toplam: {pizzaFiyat}₺</p>
            </div>
        </div>




    )
};
export default SiparisOzet;