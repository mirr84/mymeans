import React from 'react';

import lifecycle from 'react-pure-lifecycle';
import {connector} from "../../../store/utils/connector";
import {Card, CardBody} from "reactstrap";

const methods = {
    componentDidMount(props) {
    }
}

const News = ({state, dispatch}) => {

    return (
        <div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, autem distinctio excepturi id
                libero, quia, quibusdam quis quo reiciendis repellat sequi voluptate? Debitis, dolorem earum libero
                natus quia velit voluptatem!
            </div>
            <div>Blanditiis cupiditate exercitationem neque nobis provident quis ratione? Explicabo, odio, saepe. Et,
                explicabo, nesciunt? Ducimus inventore itaque libero, possimus repellendus sapiente veniam! Asperiores
                aut cum debitis hic nostrum quam quas.
            </div>
            <div>Ad ducimus ipsum quae, ratione similique voluptate voluptatum! Accusamus amet dolorum, eligendi enim ex
                facere illum iure magnam non odit, provident quo, ratione recusandae repellat repudiandae sequi tenetur
                vel voluptatem?
            </div>
            <div>Fugiat magni modi odio saepe sequi. A ad adipisci aliquam aliquid aspernatur atque autem debitis,
                dolorem dolorum harum illo, maiores molestiae, nam nesciunt nulla pariatur quibusdam sunt tempora
                temporibus vel?
            </div>
            <div>Accusamus alias animi deleniti fuga inventore iure natus provident sed voluptatem. Exercitationem ipsum
                laboriosam laborum, optio repellat rerum velit. Accusamus et libero minus omnis quaerat quia recusandae
                repellat, suscipit. Consequatur.
            </div>
            <div>Aperiam beatae corporis dolor eligendi enim eum eveniet itaque laudantium modi officiis, omnis porro
                qui reprehenderit similique sit soluta unde vitae. Assumenda consectetur iste iusto minima, nisi qui
                reprehenderit. Totam?
            </div>
            <div>Aut expedita hic laborum porro possimus quae sed ullam ut. Ab illo labore perferendis tempora velit.
                Mollitia nam quia vel. Molestias numquam, sit! Consequatur earum facilis incidunt maiores voluptas
                voluptates!
            </div>
            <div>Autem doloremque incidunt iste iusto nesciunt nobis officiis, provident quia repellendus suscipit
                temporibus ut vel veniam! Assumenda at cupiditate dicta distinctio libero natus quia quos sed sint
                temporibus. Architecto, cumque?
            </div>
            <div>Aperiam asperiores autem culpa delectus deserunt dolore error esse in inventore laboriosam mollitia
                optio porro quaerat qui, quibusdam, quod ratione repellat reprehenderit repudiandae rerum sapiente sequi
                sunt suscipit velit voluptates.
            </div>
            <div>Cum debitis eius fugiat natus reiciendis rem repellat soluta! Architecto cum delectus dolore ea est
                fuga ipsum libero saepe sit. Ab error excepturi iure laborum, praesentium quia sint veniam voluptates.
            </div>
            <div>A accusantium ad alias, aperiam autem dolor dolorum eaque eos esse et exercitationem inventore iste
                iure magnam praesentium quaerat quam quo repellat reprehenderit sint sunt vel voluptas voluptate. Ea,
                iusto.
            </div>
            <div>A animi dicta ex ipsam, libero molestias suscipit ut! Eaque ex fuga fugit molestiae molestias nostrum
                officia, perferendis quis quisquam recusandae repudiandae sint suscipit velit? Dolores enim
                reprehenderit veritatis voluptatem?
            </div>
            <div>At eos placeat possimus rem tenetur. Consequuntur dolorem facere fugit magni neque quod? A ab assumenda
                at atque culpa cumque ex excepturi, expedita, libero nam nobis pariatur, quis rem totam.
            </div>
            <div>Ab atque doloribus dolorum, eius et exercitationem, expedita illo iure magnam mollitia neque nobis
                nostrum obcaecati qui ratione similique veritatis. Animi doloribus facilis molestiae? Ad laudantium quia
                quos temporibus unde.
            </div>
            <div>Animi deleniti dolorum ipsa pariatur quisquam, voluptatum. Culpa eveniet pariatur perspiciatis quis,
                temporibus velit. Adipisci aut, debitis, delectus distinctio inventore minima nesciunt officiis
                perspiciatis reiciendis soluta, tenetur veniam voluptatem voluptates!
            </div>
            <div>Ab aliquam blanditiis consequatur consequuntur corporis cum cumque deserunt doloremque doloribus
                dolorum ducimus eaque eius enim id incidunt iure mollitia odit pariatur placeat porro quasi qui, quia
                quos rerum ullam.
            </div>
            <div>A alias assumenda at commodi consequatur culpa dignissimos, earum eius esse est facilis illum
                laboriosam minima neque nesciunt nisi officiis optio perferendis quia repellendus repudiandae similique
                suscipit tenetur totam ullam.
            </div>
            <div>Accusamus alias aliquam culpa itaque, optio porro vero. Accusamus aliquid architecto beatae dignissimos
                eaque error explicabo, ipsum iusto minus modi molestias nemo obcaecati perferendis quasi quidem rerum
                suscipit, totam, vero.
            </div>
            <div>A aliquid at commodi consectetur culpa cumque ducimus ex explicabo id ipsa obcaecati odio possimus,
                recusandae reiciendis, saepe suscipit, totam. Eaque eum exercitationem ipsum magni nemo nesciunt
                repudiandae sapiente tempora.
            </div>
            <div>Animi blanditiis distinctio dolores error fugiat neque nostrum provident quis sit. Aspernatur debitis
                dolores ducimus et eveniet facilis, fuga illo iusto labore, nemo quae quam quas suscipit tenetur velit
                vitae?
            </div>
        </div>
    );

}

export default connector(lifecycle(methods)(News));