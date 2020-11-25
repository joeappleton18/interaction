import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const StyledModalWrapper = styled.div`

   
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    z-index: 999;
    background: rgb(0,0,255,0.9);
    display: flex;
    justify-content: center;
    align-items: center;

`;

const StyledModal = styled.div`
    position: fixed;
    z-index:1000;
    width: 50vw;
    height: 50vh;
    background-color: white; 
`;

const StyledModalHeader = styled.header`
    display: flex;
    justify-content: flex-end;
    padding: 0.5rem 0.5rem;
    font-size: 30px;
    cursor: pointer;
`;





const Modal = (props) => {

    // show={showModal} onClose={handleClose}

    const { show, onClose, children } = props;

    const blockClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }

    return (<>

        {show && (<StyledModalWrapper onClick={onClose}>
            <StyledModal onClick={blockClick}><StyledModalHeader ><span onClick={onClose}> X </span></StyledModalHeader>
                {children}
            </StyledModal>
        </StyledModalWrapper>)}



    </>)
}


const Week8 = () => {

    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleClick = () => setShowModal(true);

    return <>

        <Modal show={showModal} onClose={handleClose}>


            <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia ut neque veniam tenetur sequi aliquam recusandae est in aut nisi quae id earum, veritatis nulla pariatur quasi debitis enim consequuntur?</h1>
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, dolore omnis sapiente eos pariatur veniam? At nesciunt excepturi necessitatibus quia aut, sed adipisci fugit officia maiores exercitationem illo totam cum. </p>
        </Modal>


        <button onClick={handleClick}> Click me </button> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat odio repellendus vero reiciendis vitae maxime quidem ipsum officiis incidunt veniam, quam sit illo architecto nesciunt, omnis alias nemo velit debitis.
    Nam, a. Ea quibusdam accusantium repudiandae cupiditate ipsum minus, magni odio beatae officiis exercitationem maxime facere voluptatem obcaecati fugit eius reiciendis autem deleniti voluptates at rem totam alias illum. Laboriosam?
    Sapiente animi necessitatibus voluptate obcaecati et dignissimos asperiores sunt repudiandae nihil ipsa expedita sit, culpa porro, mollitia libero nisi voluptatem delectus? Deleniti voluptas fugit esse repudiandae doloremque aspernatur eligendi cupiditate.
    Modi et quo numquam velit obcaecati fugit! Ex sapiente autem quos, suscipit reprehenderit hic voluptatibus, dolor quam ad sequi fugiat voluptates, dolorem possimus libero labore dignissimos nam quis delectus voluptate.
    Laudantium quae nemo non, labore quas deserunt in dolor facilis, quidem eveniet eaque! Fugit qui ad molestias, debitis obcaecati dolores minima velit nobis, consectetur omnis nulla aspernatur veritatis quisquam in.
    Soluta dignissimos nobis quas. Atque, debitis deleniti culpa ipsum ex dolorem deserunt labore dicta fuga, velit ipsam provident, reiciendis eos at delectus dignissimos. Porro quo quidem asperiores iure doloremque dolor.
    Expedita, commodi ipsum. Eveniet rerum itaque mollitia fuga aliquid, nemo accusamus tempore pariatur ipsa in ab facere nam enim. Voluptatum dolores reprehenderit fugit exercitationem molestiae quisquam est quo laudantium modi.
    Voluptatum voluptate asperiores itaque non incidunt sed mollitia vitae voluptates, aut inventore ad, dignissimos alias commodi velit. Consectetur, doloribus non maxime illo, recusandae, repudiandae ut aspernatur ex sit numquam delectus.
    Voluptate illum doloribus adipisci, est eos vel ut molestiae repellat in. Sit, fugit ullam officia commodi magnam aliquid eos repudiandae dolores? Deserunt harum sequi culpa, necessitatibus debitis reiciendis obcaecati aperiam?
    Nam eum veniam ea repellendus vel. Eveniet odit omnis distinctio sit in exercitationem voluptates odio rerum optio provident maxime reiciendis, nisi repellendus, delectus repellat molestiae enim amet laudantium beatae adipisci!
    Nesciunt, aliquid dolorem quisquam ex debitis perferendis non reprehenderit tempore officiis libero qui, optio eos? Molestiae, illo deserunt omnis animi sunt natus dolorem a inventore eligendi, consequatur harum aut sapiente.
    Beatae tempora voluptates consequuntur expedita. Dolorum nemo autem possimus laborum omnis veniam similique perferendis voluptates, eum nihil dicta quam quas optio unde fugit consectetur alias quasi ab. Quod, laboriosam odio.
    Deserunt necessitatibus esse reprehenderit aliquid rem porro ullam beatae tempore provident saepe eius blanditiis tenetur quasi animi placeat praesentium sed aliquam dolorem earum quis, laboriosam a perspiciatis voluptate? Eum, iure.
    Unde, cupiditate rem, quidem nulla voluptate est praesentium consectetur, animi in temporibus magnam. Totam doloribus soluta minima aliquid ratione? Quas quae laborum dolorum maxime, consequatur voluptatum perferendis eos sit temporibus.
    Doloribus, inventore non iusto, ipsa incidunt ratione eos corporis rerum aliquam illo sit corrupti eum quia sequi atque placeat, itaque pariatur perferendis eaque accusantium vitae facilis sunt quam? A, molestiae.
    Magni mollitia sint, ab at eos corporis. Optio ex deserunt assumenda, nemo asperiores quo pariatur enim quas sunt inventore suscipit, quae eum tempore facere odit doloremque alias qui recusandae quidem.
    Dolorem sunt inventore, iure asperiores nesciunt labore, dolor quod commodi expedita aliquid at unde nam deleniti obcaecati! Labore sit, ullam autem libero voluptas inventore vel nostrum nesciunt natus esse non.
    Laboriosam, eum exercitationem cum distinctio sapiente, omnis ut soluta totam ratione amet id quisquam. Suscipit cum quo rerum ab ullam quasi obcaecati saepe possimus vitae nulla. Aspernatur cum ea reprehenderit!
    Assumenda corporis quidem pariatur error, ea voluptas repellendus porro, ratione asperiores molestiae doloremque dolore consectetur velit ex iusto odit itaque nam non adipisci impedit. Alias dignissimos enim ducimus. Cumque, voluptate.
    Magnam harum ducimus iste veniam possimus corrupti nam. Delectus voluptatibus sit sint veritatis libero soluta odit rem repudiandae, ad, nobis tempore itaque deserunt quo possimus magni numquam, explicabo ipsum fuga.
    Deleniti blanditiis in itaque soluta minus. Inventore autem rerum sapiente molestiae similique ad vero pariatur quam animi debitis tenetur earum possimus, quasi porro amet aliquid. Quia alias voluptas at mollitia!
    Voluptatem, expedita! Quod optio repellat magnam laborum cum. Eaque, odit. Non officia in maxime quod veritatis. A nobis officiis, natus aspernatur facere maiores consequuntur animi nihil, voluptatibus, reprehenderit hic ea?
    Repellendus ab voluptatum quidem optio, inventore veniam corporis alias, reprehenderit voluptatem earum assumenda neque molestiae magnam modi aliquid iste praesentium! Explicabo autem provident consequatur rem quis deleniti animi ex non.
    Nobis tempore officiis sequi repudiandae in, vero et asperiores sit voluptatem. Soluta, pariatur tempora. Soluta impedit dicta quia ex saepe itaque harum laboriosam deleniti eos! Ut ratione blanditiis sequi exercitationem.
    Amet quo consequuntur dicta error modi, laborum unde. Debitis, aperiam! Nulla, neque maxime et repellendus nihil distinctio facilis placeat ullam tenetur harum vero doloremque rerum aperiam aspernatur eligendi ab asperiores?
    Dolores, voluptatum blanditiis nisi ab a molestiae aut vel excepturi omnis voluptatem officiis itaque quidem eum? Accusantium repellat, magni deserunt necessitatibus reiciendis aperiam laudantium dolores, assumenda sit quaerat, veniam explicabo.
    Asperiores officiis reprehenderit maiores ea. Porro aliquid repellendus, nulla sequi eum, quasi necessitatibus repudiandae, minima cum eius perferendis iusto repellat provident expedita! Saepe rem dolorem modi ad quasi laudantium sed.
    Rerum excepturi, error esse ipsa commodi fuga aliquam vitae et incidunt amet dolorum corporis numquam aliquid alias inventore beatae quis blanditiis culpa expedita voluptatum deleniti ut molestiae veniam non. Doloremque.
    Repellat necessitatibus reiciendis nemo. Est consequuntur, ad nemo possimus provident quas asperiores placeat et similique ipsam voluptas, cum dicta vero aliquam deleniti. Voluptates nemo tenetur debitis quos provident iste sunt.
    Nisi, odio. Assumenda debitis temporibus, neque quos sed consectetur molestiae itaque sint eveniet consequuntur ullam. Magni animi sit doloremque soluta cum dolor accusamus eveniet, in quo quisquam delectus voluptatibus eum!
    Architecto itaque officiis ullam doloribus saepe natus quos! Maxime dolor eum sequi rem tenetur quia, quasi voluptatibus qui quibusdam ex nobis impedit, id commodi eligendi minima ab amet? Dolorum, quisquam!
    Mollitia delectus hic officiis perspiciatis omnis vel nostrum suscipit. Architecto blanditiis saepe corrupti labore unde sit, quibusdam consectetur adipisci fugiat voluptas id ut culpa sed neque possimus voluptatem nobis voluptatibus.
    Pariatur dolor consectetur, error, odio facere delectus, quaerat cum hic quo enim beatae esse ab! Eveniet doloribus facere quidem eligendi sit praesentium et culpa distinctio labore perspiciatis? Sequi, nulla enim.
    Facilis eos voluptatum fugit adipisci! Dolores tempore, accusantium labore veniam totam aperiam. Fuga recusandae rem, veniam itaque porro suscipit quas ipsa molestiae aut dicta reprehenderit. Ex laborum ut saepe debitis?
    Dignissimos itaque esse ab iure doloremque reprehenderit aut vel maxime. Qui voluptate quisquam maxime harum voluptates? Nulla, fugit commodi aut quidem dicta repellat similique sit, atque tenetur hic dolore odio.
    Odit nostrum in, sunt deserunt est non consequuntur cupiditate itaque fugiat. Labore, aperiam. Consequuntur perferendis fugit, quisquam neque ullam quod iusto ab aspernatur, doloribus pariatur eveniet totam, dolor culpa possimus!
    Sunt voluptatum obcaecati odio at cumque debitis error quidem? Ut voluptates alias, nihil doloribus molestias iure animi cupiditate voluptatem provident expedita quasi necessitatibus debitis id? Tenetur ullam rerum nesciunt libero?
    Aspernatur, corrupti aliquid hic inventore minima, placeat minus illo, numquam consectetur iste temporibus. Quam inventore, laborum eos itaque iure labore ea aperiam officia hic, iusto voluptas tempora eveniet vitae ipsam.
    Facilis perspiciatis enim ipsum? Voluptate repudiandae cumque aliquam accusantium. Minus adipisci laudantium voluptas totam. Unde repellendus quasi delectus autem veritatis doloremque officia facere incidunt repellat distinctio culpa, dicta fugiat est.
    Pariatur, voluptatum in illum consequuntur veritatis perspiciatis ad eum natus, fugit inventore numquam ab laudantium nisi modi earum incidunt nihil quis aliquid? Dicta incidunt odio esse ullam, eum tenetur dolorem?
    Magni, mollitia. Vel, aut fuga illum, corporis labore nesciunt quam ratione laborum earum exercitationem, quibusdam explicabo? Eius cumque omnis voluptatum? Maxime veritatis atque fugiat. Quas aliquam corporis consectetur accusamus iusto!
    Neque aperiam, ipsa velit voluptas in eaque ratione recusandae rem sint odit quidem quam. Ab illo earum nobis perferendis, placeat consequuntur. Rem nam eveniet quae quas corrupti eligendi esse quidem?
    Dolore dolorum temporibus autem. Dolorem minus mollitia tenetur cum non accusantium obcaecati, sint placeat dolore maxime error optio nam itaque. Aut repellat eligendi temporibus quia provident asperiores illum excepturi eos.
    Dignissimos fugiat cum sapiente possimus quos eius fugit laudantium, suscipit neque quia eveniet dolorum blanditiis consequuntur, incidunt maiores provident. Tempora id eius saepe cupiditate porro voluptatum magnam quae blanditiis et.
    Aliquam dolore aliquid enim ut eveniet quae delectus ab corrupti tenetur illo autem nihil magni explicabo distinctio maxime, suscipit necessitatibus iusto! Libero laboriosam officiis molestias quas autem ad magnam molestiae.
    Ut, dolores. Velit, porro laboriosam. Voluptatum amet laudantium dolore voluptatem nostrum culpa ipsa itaque autem consectetur recusandae corporis ullam, corrupti eligendi deleniti exercitationem sed nobis nulla provident hic? Nemo, itaque?
    Reiciendis, minima. Vero ipsam alias autem asperiores error vitae atque quibusdam fugit numquam soluta sit, nostrum corrupti eligendi tempore maxime, provident, est labore! Minus hic obcaecati quis incidunt omnis repudiandae!
    Beatae omnis iure nulla magnam ipsam, ex labore enim natus cupiditate sit, iste ea ut. Doloribus aperiam vitae necessitatibus harum voluptatem laborum beatae tempora ex magnam minus, quam eveniet aliquam.
    Aperiam, consequatur. Illum molestiae quaerat maiores eum impedit. Ipsam, consequatur. Fuga id consequuntur sapiente aliquid quod quaerat excepturi ipsa in explicabo. Aspernatur, a ratione! Assumenda fuga necessitatibus obcaecati esse repudiandae!
    Quas esse illum rerum aperiam at? Molestias debitis fugiat recusandae repudiandae quas perferendis inventore consequatur veritatis ducimus doloremque sint laudantium tempora atque, itaque non ea fuga repellendus architecto. Ratione, quo!§ </>
}



export default Week8;