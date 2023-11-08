import bannerImg from "../Assets/adv-aseets/adv-form-banner.png";
import React from "react";
import "./AbsolutePizza.css";

const AbsolutePizza = () => {
    return (
        <div className="product">
            <img src={bannerImg} />
            <h3 className="pizzabaslik">Position Absolute Acı Pizza</h3>
            <p className="price">85.50₺</p>
            <p className="productAciklama">Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates,
                peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir
                fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan
                oluşan İtalyan kökenli lezzetli bir  yemektir. Küçük bir pizzaya bazen pizetta denir.
            </p>
        </div>
    )
}
export default AbsolutePizza;