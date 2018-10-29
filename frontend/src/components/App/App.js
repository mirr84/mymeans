import React from 'react';

import {connector} from "../../store/utils/connector";
import lifecycle from 'react-pure-lifecycle';
import WindowSizeListener from 'react-window-size-listener';

import Sticky from 'react-sticky-el';
import Layout from "../Layout";
import MetisMenu from 'react-metismenu';

const methods = {
    componentDidMount(props) {
    }
}

const content=[
    {
        icon: 'icon-class-name',
        label: 'Label of Item',
        to: '#a-link',
    },
    {
        icon: 'icon-class-name',
        label: 'Second Item',
        content: [
            {
                icon: 'icon-class-name',
                label: 'Sub Menu of Second Item',
                to: '#another-link',
            },
        ],
    },
];

const App = ({state, dispatch}) => {
    return (
        <div>
            <WindowSizeListener
                onResize={windowSize => dispatch.setter('commonReducer', {
                    windowWidth: windowSize.windowWidth,
                    windowHeight: windowSize.windowHeight
                })}
            />

            <Layout head={'head'}
                    footer={'footer'}
                    content={
                        <div>
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ex neque placeat
                                quae, sequi voluptatem? Aliquid autem cumque deserunt exercitationem, fugit illo ipsa
                                nesciunt, placeat quia sequi tempora unde, voluptas.
                            </div>
                            <div>Aspernatur cum enim non! Delectus dicta doloremque eligendi nihil nobis possimus qui
                                ratione reiciendis repellendus voluptatem. Amet asperiores assumenda dignissimos dolor
                                ducimus earum exercitationem, iusto omnis quidem quisquam temporibus, voluptates?
                            </div>
                            <div>Blanditiis culpa doloremque eligendi eos nisi, obcaecati odit? Asperiores fugiat hic
                                officia praesentium vel? Accusamus facere facilis fuga in ipsam molestias officiis optio
                                pariatur repellat totam. Asperiores molestiae quod tenetur.
                            </div>
                            <div>Architecto atque aut consequatur doloremque incidunt, labore laborum nobis quae quo
                                repudiandae saepe similique unde, voluptas. Aspernatur debitis eligendi facere hic
                                itaque labore magnam maxime mollitia quaerat, ullam, ut voluptas.
                            </div>
                            <div>A architecto autem distinctio esse est natus necessitatibus nulla numquam perspiciatis
                                quisquam, quo ratione sint, suscipit tempora ut voluptate voluptates? Aperiam nam nisi
                                veniam. Accusamus eius laboriosam magni nam sit.
                            </div>
                            <div>At autem consequatur eligendi neque ut. Ab adipisci fugiat nihil odio omnis pariatur
                                praesentium quo ratione, rerum tenetur, ullam unde veniam vero! Enim eos est eveniet
                                laudantium necessitatibus reiciendis voluptatem?
                            </div>
                            <div>Alias, animi aut consequatur et eveniet illum iste maiores minus molestias optio quo
                                reprehenderit saepe. Ad alias eaque est explicabo laboriosam laborum nobis odio odit,
                                quam, ratione sequi sint tempore.
                            </div>
                            <div>A alias consequuntur distinctio dolore dolorum ducimus error eveniet fuga ipsum itaque
                                iusto laboriosam laudantium, magnam nam non obcaecati omnis perspiciatis ratione rem sed
                                sunt suscipit tempora totam vero voluptatem.
                            </div>
                            <div>Adipisci aperiam asperiores assumenda at cupiditate dignissimos distinctio doloremque
                                dolores eaque eius et exercitationem facere id illum minus nam nihil nulla odit placeat,
                                quasi quos repellendus totam ullam unde voluptatem.
                            </div>
                            <div>Aliquid dolore, eligendi explicabo facere itaque laborum libero nesciunt quam ullam ut!
                                Atque consectetur error id magni odit porro quia. Aliquid assumenda consequatur impedit
                                molestiae officiis optio pariatur ratione sequi.
                            </div>
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid, amet
                                assumenda, aut commodi dolorum exercitationem expedita facere ipsum nihil numquam
                                pariatur placeat quisquam ratione reprehenderit similique sint suscipit totam.
                            </div>
                            <div>Accusantium blanditiis doloribus facere iure non nulla officia possimus qui reiciendis
                                sequi, soluta sunt tempora. Aperiam asperiores consectetur, doloribus dolorum eius error
                                modi, odit possimus quos totam velit veniam vitae.
                            </div>
                            <div>Blanditiis, nihil vero. Ab aliquid aspernatur autem, eaque eum nemo voluptates. Ad
                                aliquam aliquid aspernatur autem ex iusto perspiciatis, ratione unde. Asperiores at
                                beatae laudantium porro quas quibusdam sit suscipit?
                            </div>
                            <div>Aliquid cumque debitis dolores id ipsa magni, non placeat praesentium quia
                                reprehenderit, tempora tenetur veniam! Asperiores culpa distinctio dolores eveniet
                                excepturi itaque laborum libero, molestiae perferendis, quas tempore voluptatibus
                                voluptatum?
                            </div>
                            <div>Ad, amet at consectetur cumque distinctio dolor error ex exercitationem facere facilis
                                impedit ipsum iste iure laboriosam magnam magni maxime molestiae numquam obcaecati
                                quaerat quasi quia quibusdam quis sit vel.
                            </div>
                            <div>Animi aperiam autem beatae consequatur corporis deserunt dignissimos dolore ducimus
                                fugit illo incidunt iusto laboriosam maxime minus, nostrum odio odit quibusdam tenetur
                                voluptate voluptatum! Ad aliquam est iste officiis praesentium.
                            </div>
                            <div>Ab, architecto assumenda beatae, dicta eaque enim eum expedita explicabo ipsa ipsum
                                libero magni maiores maxime molestiae nemo praesentium provident quam quibusdam quisquam
                                quod quos reprehenderit repudiandae sed sequi ullam.
                            </div>
                            <div>Accusamus debitis doloremque, et magni maxime nobis porro praesentium vitae? Adipisci
                                aliquid asperiores aspernatur, atque, eaque earum error eum ipsam minima, nostrum
                                officiis quam quas qui repellat ullam vero voluptatum.
                            </div>
                            <div>Aperiam architecto at blanditiis consequatur earum eius eligendi esse et eveniet ex,
                                fuga inventore, ipsum iure iusto magni maiores molestias necessitatibus nulla odit porro
                                provident quibusdam quisquam sint sunt vero.
                            </div>
                            <div>Ad cumque cupiditate dicta exercitationem labore minima molestiae, natus nostrum
                                obcaecati optio, soluta suscipit vero vitae. Blanditiis facere facilis fugiat ipsa minus
                                nisi odio, omnis optio ut veniam veritatis voluptatibus!
                            </div>
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae doloribus, ex nemo
                                nulla quidem temporibus! Dolores eum exercitationem fugiat minima nobis quasi soluta ut?
                                Cumque deleniti est obcaecati reiciendis sapiente.
                            </div>
                            <div>Cumque, dolore tempora. Adipisci delectus facere fugiat inventore, iure laboriosam
                                laborum, modi neque, placeat quae repellendus sapiente tempora unde vero voluptatem.
                                Autem cupiditate delectus eum iste? Assumenda perspiciatis qui unde?
                            </div>
                            <div>Accusamus doloribus eaque eveniet ipsam ipsum, laudantium libero nam odio quisquam quo
                                temporibus totam voluptate voluptatibus. Delectus deleniti libero nemo nihil numquam
                                quidem? Ab consequatur debitis eveniet nihil pariatur reprehenderit.
                            </div>
                            <div>Animi consequatur et expedita, laborum molestias natus officia possimus recusandae
                                rerum sunt! Ab laboriosam quis reprehenderit. Ad placeat rerum voluptatibus? Accusamus
                                ad et harum itaque nulla odio possimus velit veritatis!
                            </div>
                            <div>Animi, deleniti dolorem dolorum expedita laborum maiores, modi molestiae nam, placeat
                                porro rem repellendus sunt vel. At earum error harum illo labore, modi perferendis quas
                                repellendus rerum sunt temporibus vel!
                            </div>
                            <div>Accusamus, accusantium, ad alias expedita fugiat maiores nemo nesciunt officiis porro
                                quis quos sunt temporibus veritatis! Adipisci aliquid at consequatur deleniti labore
                                natus, provident quis, quo sunt totam unde veritatis.
                            </div>
                            <div>Asperiores at autem beatae cumque delectus dicta, dolorem doloribus dolorum eius et
                                illo inventore iure minus nisi nobis nostrum perferendis porro praesentium quas quis
                                quos repellat sunt unde velit veritatis?
                            </div>
                            <div>Autem consequuntur esse harum illo itaque nisi ratione recusandae soluta temporibus
                                voluptate! Consequatur incidunt laudantium sed sint temporibus. Accusamus deleniti
                                ducimus ipsam molestias nobis quae quaerat quasi ratione unde, vero.
                            </div>
                            <div>Accusamus cumque cupiditate dolorem doloremque esse ex harum itaque labore omnis
                                provident, quasi quibusdam quo quod repudiandae sapiente sint veniam. Cupiditate et id
                                itaque perferendis, ratione reiciendis repudiandae sint sunt.
                            </div>
                            <div>Accusantium eaque, facere nulla obcaecati officiis placeat provident quo voluptatem!
                                Consectetur error et excepturi itaque iure magnam molestias neque placeat voluptatem
                                voluptatum! Asperiores dolore dolorum iure. Doloribus repellendus velit voluptates.
                            </div>
                        </div>
                    }
                    left={
                        <Sticky>
                            <br/>
                            <MetisMenu content={content} activeLinkFromLocation />
                        </Sticky>
                    }
                    right={
                        <Sticky>
                            <br/>
                            <MetisMenu content={content} activeLinkFromLocation />
                        </Sticky>
                    }
            />


        </div>
    )
}

export default connector(lifecycle(methods)(App));