import React, { useEffect } from 'react'
import "../css/app0826tooltip.scss"
import $ from "jquery"

const App = () => {
    useEffect(() => {
        $("a:has(.ttp-show)").on("mouseover",function (e) {
            $("body").append("<div id='ttp-panel'>" + $(this).children(".ttp-show").html() + "</div>");
            $("#ttp-panel").css({
                top: (e.pageY+10) + 'px',
                left: (e.pageX + 10) + 'px'
            }).fadeIn('fast');
        }).on("mouseleave",function () {
            $("#ttp-panel").remove();
        }).on("mousemove",function (e) {
            $("#ttp-panel").css({
                top: (e.pageY+10) + 'px',
                left: (e.page+10) + 'px'
            });
        });
    }, []);

    return (
        <div className='wrap'>
            <h1>Tooltip</h1>
            <p>Lorem ipsum dolor sit amet consectetur
                <a href='#'>adipisicing
                    <span className='ttp-show'>adipisicing 內容說明</span>
                </a>elit. Deleniti nobis ex odio fuga enim saepe iste cupiditate asperiores assumenda. Ratione itaque neque ducimus! Quo neque consequatur minus dolorum, aspernatur dolore repellendus iure aperiam assumenda similique quis voluptatem! Perferendis, fuga earum inventore ipsa similique sit! Officiis, eum voluptas. Iure voluptate unde nobis provident aliquid sequi sunt soluta repellendus nesciunt impedit molestias maxime repudiandae libero neque expedita adipisci, fuga ex! Reprehenderit est rem optio autem nulla praesentium illum tenetur. Quod officiis labore autem exercitationem amet sequi eaque recusandae totam perferendis dolor! Omnis quidem dolorem, asperiores, molestias ea modi dolor quos aliquam accusamus libero dolorum aut ipsa quam odio et ipsam minus! Earum reiciendis libero sunt sapiente aliquam nam corrupti facilis blanditiis vitae quae quos ipsum expedita ipsa nostrum, porro incidunt aliquid numquam laborum fugit molestias sint? Accusantium vero, repellat rerum expedita voluptates ipsum consequuntur? Ea quisquam exercitationem ex praesentium inventore possimus. Dolorum officiis voluptates deserunt optio, iusto tenetur exercitationem repellendus ab pariatur? Omnis quo incidunt corrupti labore totam hic delectus quisquam qui recusandae alias, aperiam, dolor iusto reiciendis laborum obcaecati iure odio provident a corporis ullam quis? Veniam officiis optio totam explicabo accusantium assumenda tenetur, in vel numquam modi perspiciatis voluptatem, iure a itaque? Veritatis qui dignissimos beatae numquam unde deleniti sunt nulla optio sint sapiente incidunt, autem officia, quam excepturi assumenda similique est repellendus, nemo deserunt. Quod soluta itaque non officia, est aspernatur repellendus deleniti quasi magnam explicabo esse labore accusamus rem ex vitae id error. Cumque aspernatur quasi quaerat! Et est voluptatibus atque nostrum porro iste saepe, provident labore voluptatem fugiat nisi corrupti odio suscipit eaque aut eveniet voluptas rem exercitationem temporibus ratione mollitia maiores? Recusandae cupiditate tempore totam dolorum aperiam molestias eveniet, esse repudiandae. Harum eveniet quis, non tenetur vero ipsa corporis excepturi molestiae fugiat sapiente quidem, incidunt, qui magnam accusamus tempore illo eligendi repellendus sint. Id necessitatibus suscipit, veniam mollitia doloremque illo vel laboriosam ullam repudiandae minima accusantium quidem? Consectetur corrupti hic a? Explicabo magni doloremque velit libero esse! Numquam placeat, sit aliquam non nostrum tempora animi nesciunt laboriosam itaque sapiente. Illo sit obcaecati ipsam corrupti, vel hic, voluptatum fugiat unde recusandae corporis explicabo omnis incidunt voluptates, culpa aperiam id. Voluptates impedit rerum modi aperiam ipsam debitis, temporibus harum tempora cumque doloribus, commodi, quidem odio minus numquam. Veniam, totam recusandae in quibusdam delectus dolorem. Quia, ab neque. Deserunt, quis rem! Perspiciatis suscipit porro adipisci sed quis pariatur ratione. Doloremque, laboriosam. Neque minus quis aperiam quisquam culpa asperiores quibusdam explicabo nam minima nesciunt quaerat nostrum ratione ipsum magni, molestias ipsam quam delectus consectetur deserunt tempore ad. Natus, aut magni voluptatum, hic eius exercitationem eligendi unde cum vel enim suscipit inventore harum voluptatibus sapiente minus, recusandae nam aspernatur dolorem quo facere numquam dolorum sint officiis. Quibusdam maiores officia, aliquam velit nesciunt voluptatum molestias impedit culpa expedita numquam tempore dicta dignissimos nobis adipisci ullam voluptates dolores saepe dolorum porro quam cumque eaque rem necessitatibus debitis? Ea saepe natus perferendis explicabo eos? Sed cum reiciendis excepturi? Unde est magnam qui perspiciatis ab!</p>
        </div>
    )
}

export default App