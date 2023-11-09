import React, { useEffect, useState } from 'react';
import Header from './Header';
import "./Order.css";
import axios from 'axios';
import * as yup from "yup";
import { Form } from 'reactstrap';
import "./Order.css";
import SiparisOzet from "./SiparisOzet";
import { useHistory } from 'react-router-dom';
import AbsolutePizza from './AbsolutePizza';






const dobbyData = {
    pizzaKenar: "",
    pizzaBoyut: "",
    ekMalzeme: [],
    not: "",
    siparisAdet: 1,
    pizzaFiyat: 85.50,
    ekMalzemeFiyat: 5,
};

const dobbyDataErrors = {
    pizzaKenar: "",
    pizzaBoyut: "",
    ekMalzeme: [],
    not: "",
    siparisAdet: "",
};




const schema = yup.object().shape({
    not: yup
        .string(),

    siparisAdet: yup
        .number()
        .required("Sipariş adedi gereklidir.")
        .positive('Sipariş adedi pozitif bir sayı olmalıdır.')
        .integer('Sipariş adedi tam sayı olmalıdır.')
        .min(1, "Sipariş en az 1 adet olmalıdır."),

    ekMalzeme: yup
        .array()
        .max(3, 'En fazla 3 ek malzeme seçilebilir.')
        .nullable(),

    pizzaBoyut: yup
        .mixed()
        .oneOf(["kücük", "orta", "büyük"])
        .required("Pizza boyutu seçmelisiniz."),

    pizzaKenar: yup
        .mixed()
        .oneOf(["İnce", "Normal", "Kalın"])
        .required("Hamur kalınlığı seçmelisiniz."),
});

const Order = ({ setSiparis }) => {
    const [formData, setFormData] = useState(dobbyData);
    const [errors, setErrors] = useState(dobbyDataErrors);

    const [disabled, setDisabled] = useState(true);




    useEffect(() => {
        schema
            .isValid(formData)
            .then(valid => setDisabled(!valid));
    }, [formData]);

    const checkErrors = (name, value) => {
        yup.reach(schema, name)
            .validate(value)
            .then(() => setErrors({ ...errors, [name]: "" }))
            .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
    };


    const handleChange = (event) => {
        const { name, value, type, checked, id } = event.target;

        if (type === "checkbox") {
            if (checked) {
                let ek = formData.ekMalzeme;
                let yeniArr = [...ek];
                yeniArr.push(id);
                setFormData({ ...formData, [name]: yeniArr });
            } else {
                let ek = formData.ekMalzeme;
                let yeniArr = [...ek];
                yeniArr.splice(yeniArr.indexOf(id), 1);
                setFormData({ ...formData, [name]: yeniArr });
            }
        } else {
            checkErrors(name, value);
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };


    const handleIncrement = () => {
        setFormData({
            ...formData,
            siparisAdet: formData.siparisAdet + 1
        });
    };

    const handleDecrement = () => {
        if (formData.siparisAdet > 0) {
            setFormData({
                ...formData,
                siparisAdet: formData.siparisAdet - 1
            });
        }
    }


    const historySiparisOzeti = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post("https://reqres.in/api/users", formData)
            .then((res) => {
                historySiparisOzeti.push('/siparis-ozeti');
                console.log(res.data)
                setSiparis(res.data);
                // setGelenSiparis(true);
                // setSiparisData(res.data);

                // setTimeout(() => {
                //     setGelenSiparis(false);
                // }, 3000);

                // setTimeout(() => {
                //     setSiparisData(initialSiparisData);
                // }, 8000);

                // setFormData(dobbyData);

            })
            .catch((err) => console.log("Errors: ", err));
    };



    return (
        <div>
            <Header />
            <AbsolutePizza />
            <form id="pizza-form" onSubmit={handleSubmit}>
                <div className='boyutHamur'>
                    <div className='boyutInput'>
                        <h4>Boyut Seçiniz</h4>
                        <label htmlFor="small">S</label>
                        <input
                            type="radio"
                            id="kücük"
                            name="pizzaBoyut"
                            value="kücük"
                            checked={formData.pizzaBoyut === 'kücük'}
                            onChange={handleChange}
                        />
                        <label htmlFor="medium">M</label>
                        <input
                            type="radio"
                            id="orta"
                            name="pizzaBoyut"
                            value="orta"
                            checked={formData.pizzaBoyut === 'orta'}
                            onChange={handleChange}
                        />
                        <label htmlFor="large">L</label>
                        <input
                            type="radio"
                            id="büyük"
                            name="pizzaBoyut"
                            value="büyük"
                            checked={formData.pizzaBoyut === 'büyük'}
                            onChange={handleChange}
                        />
                        {errors.pizzaBoyut && <div className="errors">{errors.pizzaBoyut}</div>}
                    </div>
                    <div className='size-dropdown'>
                        <h4> Hamur Seç </h4>
                        <select className='hamurSelect'
                            id="pizza-kenar"
                            name="pizzaKenar"
                            value={formData.pizzaKenar}
                            onChange={handleChange}
                        >
                            <option value="hamurKalinligi">-Hamur Kalınlığı Seç-</option>
                            <option value="İnce">İnce</option>
                            <option value="Normal">Normal</option>
                            <option value="Kalın">Kalın</option>
                        </select>
                    </div>
                    <div className="errors">{errors.pizzaKenar}</div>
                </div>
                <div className="ekmalzemeler">
                    <h4> Ek Malzemeler </h4>
                    <p> En fazla 3 malzeme seçebilirsiniz. 5₺</p>
                </div>
                <div className='ekmalzemeler-input'>
                    <label htmlFor="Pepperoni">Pepperoni</label>
                    <input
                        type="checkbox"
                        id="Pepperoni"
                        name="ekMalzeme"
                        checked={formData.ekMalzeme.includes("Pepperoni")}
                        onChange={handleChange}
                    />
                    <label htmlFor="Domates">Domates</label>
                    <input
                        type="checkbox"
                        id="Domates"
                        name="ekMalzeme"
                        checked={formData.ekMalzeme.includes("Domates")}
                        onChange={handleChange}
                    />
                    <label htmlFor="Biber">Biber</label>
                    <input
                        type="checkbox"
                        id="Biber"
                        name="ekMalzeme"
                        checked={formData.ekMalzeme.includes("Biber")}
                        onChange={handleChange}
                    />
                    <label htmlFor="Sucuk">Sucuk</label>
                    <input
                        type="checkbox"
                        id="Sucuk"
                        name="ekMalzeme"
                        checked={formData.ekMalzeme.includes("Sucuk")}
                        onChange={handleChange}
                    />
                    <label htmlFor="Tavuk Izgara">Tavuk Izgara</label>
                    <input
                        type="checkbox"
                        id="Tavuk Izgara"
                        name="ekMalzeme"
                        checked={formData.ekMalzeme.includes("Tavuk Izgara")}
                        onChange={handleChange}
                    />
                    <label htmlFor="Mısır">Mısır</label>
                    <input
                        type="checkbox"
                        id="Mısır"
                        name="ekMalzeme"
                        checked={formData.ekMalzeme.includes("Mısır")}
                        onChange={handleChange}
                    />
                    <label htmlFor="kanadajambonu">Kanada Jambonu</label>
                    <input
                        type="checkbox"
                        id="kanadajambonu"
                        name="ekMalzeme"
                        checked={formData.ekMalzeme.includes("kanadajambonu")}
                        onChange={handleChange}
                    />
                    {errors.ekMalzeme && <div className="errors">{errors.ekMalzeme}</div>}
                </div>
                <div className="special-text">
                    <label className="siparisLabel" htmlFor="not">
                        <b>Sipariş Notu</b>
                    </label>
                    <br />
                    <input
                        placeholder='Siparişine eklemek istediğin bir not var mı?'
                        type="text"
                        size="50"
                        id="not"
                        name="not"
                        value={formData.not}
                        onChange={handleChange}
                    />
                </div>
                <div className='toplamBtn'>
                    <div className="order-quantity">
                        <button className='handleBtn'
                            type="button"
                            onClick={handleDecrement}
                            disabled={formData.siparisAdet <= 1}
                        >
                            -
                        </button>
                        <p className='spanSiparisAdet'>{formData.siparisAdet}</p>
                        <button className='handleBtn'
                            type="button"
                            onClick={handleIncrement}
                        >
                            +
                        </button>
                    </div>
                    <div className="errors">{errors.not}</div>
                    <div className='siparisGonderBtn'>
                        <div className="total-price">
                            <h4>Sipariş Toplamı:</h4>
                            <p className='pSecim'>Seçimler: {(formData.ekMalzemeFiyat * formData.ekMalzeme.length) * formData.siparisAdet}₺</p>
                            <p className='pSecim'>Toplam: {formData.pizzaFiyat * formData.siparisAdet + (formData.siparisAdet * formData.ekMalzemeFiyat * formData.ekMalzeme.length)}₺</p>
                        </div>

                        <button disabled={disabled} name="button" id="order-button" type="submit">Sipariş Ver</button>
                    </div>
                </div>



            </form>

        </div>
    );
};


export default Order;