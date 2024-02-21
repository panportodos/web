/**
 * servlet 프로젝트명: product
 * group_id: com.study
 * artifact_id: product
 * name: product
 * jdk: 11
 * dependencies
 *  1. lomok
 *  2. jsp(tomcat 9)
 *  3. Gson
 *  4. mysql
 * 
 * package
 *  com.study.product
 * config - DBConfig
 * dao    - ProductDao
 * entity - Product
 * filter - CommonFilter
 * servlet
 *  - InsertProductServlet(/product, ROST)
 *  - SearchProductServlet(/products, GET)
 * 
 * DB(db_study)
 * table(product.tb)
 * product_id, product_name(Uniuqe), product, service, product_size(ss,s,M, L, XL, XXL)
 * 
 */



async function handleAddClick() {
    const dataInputs = document.querySelectorAll(".product-inputs");
    const data = { 
                Name : dataInputs[0].value,
                Price : parseInt(dataInputs[1].value),
                Size : dataInputs[2].value
                };

    
try{
    const response = await fetch("http://localhost:8080/product/product",
    {
        method: "post",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(data)
    } );
    if(!response.ok) {
        throw await response.json();
    }

        const responseData = await response.json();
        console.log(responseData);
        alert(`${responseData.successCount}건의 상품 추가 완료`);
    } catch(error) {
    alert(error?.errorMessage);
    }
}