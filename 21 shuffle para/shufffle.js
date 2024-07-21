let text = [
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio doloremque et ullam quis aliquid. Minus praesentium vero velit odio adipisci ducimus. Fuga, voluptas sequi dolorum consequuntur, officia repudiandae mollitia harum totam deleniti aspernatur ratione libero impedit dicta eaque error a itaque suscipit blanditiis vero nesciunt ab explicabo praesentium unde vel?",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde optio delectus fugit aliquid architecto quidem vel, harum aliquam voluptas ad, accusantium provident culpa, omnis nulla deleniti eligendi quia ab beatae quaerat maxime excepturi consequatur praesentium? Voluptatem quisquam corrupti sit, fugiat laboriosam ipsam, at excepturi sint natus veniam veritatis similique nam vero eveniet iste modi temporibus rem, obcaecati quasi itaque nemo reiciendis error cumque. Tenetur dolorum atque facere, modi enim at, vero dolores error esse libero illum nesciunt tempora exercitationem harum!",
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur similique recusandae eveniet nesciunt enim voluptatem facilis obcaecati natus ea cupiditate odit illo, sit omnis alias voluptates expedita asperiores explicabo sunt ex. Quisquam hic illum, natus repellendus repudiandae vel maxime suscipit aspernatur. Sunt, libero saepe qui repellendus debitis officia tempora nobis nemo ratione deserunt, tenetur excepturi quo? Sequi doloremque impedit minus dignissimos soluta omnis sapiente recusandae iure amet! Illum quos asperiores necessitatibus dolorum. Illum officia nesciunt soluta itaque cumque animi aliquam corporis aliquid! Quam a, veritatis quas reiciendis odit hic deleniti maiores maxime ea atque, vero quo delectus nemo dolores! Accusantium?",
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. A necessitatibus, doloribus illo nisi minus enim repellat numquam, mollitia porro atque perspiciatis placeat sequi. Ex, voluptatum nisi? Debitis modi quasi cupiditate odit, repudiandae beatae delectus suscipit perspiciatis architecto quis ab vero blanditiis. Deleniti placeat officia impedit soluta vel, facilis laborum cum delectus tempora perspiciatis sapiente nobis et obcaecati libero odit illo quas. Facilis porro natus ullam, quam incidunt mollitia debitis eius ex exercitationem earum esse voluptatum aut numquam dolores consectetur explicabo accusamus consequuntur suscipit laudantium omnis. Quaerat ipsa harum dolore, laborum cumque perferendis ratione velit blanditiis quod, iure sit recusandae ea inventore aperiam. Accusantium obcaecati accusamus, aliquam odio iure minima fugiat harum magni cum deleniti. Dolor nam obcaecati vero unde. Ea.",
    " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta ad in ipsa, harum magni est repellat nostrum. Sed, necessitatibus error?",
    "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non architecto ratione adipisci tenetur voluptate ab aliquam quisquam ipsum at nobis! Explicabo incidunt laudantium excepturi tenetur labore doloribus nam vel amet officiis at? Quae quasi modi, nemo iusto earum a magnam asperiores exercitationem? Adipisci, doloremque. Quibusdam, nisi? Ipsum, corrupti neque odit reprehenderit voluptatibus omnis vero tenetur nisi autem facilis doloribus fugiat. Facere ducimus aliquam voluptas maxime voluptatum consequatur nam dolorum nihil iste, quo quaerat magnam amet iure culpa? Quis consequatur officiis nemo, eaque repudiandae fuga tempora ipsum, maxime adipisci dolore iusto?",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam nulla tenetur laborum magnam adipisci minus voluptatem amet praesentium expedita voluptates voluptate, distinctio tempore repudiandae ab, sed, officiis id laboriosam modi sint eligendi delectus quidem. Nihil dignissimos cupiditate magnam eos, veritatis ea et. Natus expedita soluta corrupti maiores, esse impedit officia, commodi blanditiis tempora ea perferendis repellendus accusantium amet exercitationem consequuntur sed suscipit aliquid vel culpa illum magni nesciunt. Repellat ipsa nobis est mollitia natus voluptas esse illo vel sequi atque, veniam illum id nam non dolores laborum similique nostrum ea officia impedit fugiat corporis inventore maiores reiciendis. Exercitationem ratione veniam laborum magni eius, similique expedita consectetur quos recusandae voluptates nihil dolorem architecto totam aliquid nostrum iste odio facere maxime quisquam ex dicta temporibus consequuntur? Qui consectetur enim corrupti mollitia, minima harum! Dolorum quos ducimus culpa? Corporis, autem est! Odit, numquam! Harum dicta ut id architecto quod dolore, in quis quaerat omnis error voluptate blanditiis facilis earum, delectus magni aliquam cumque nemo optio distinctio! Adipisci, unde obcaecati quaerat at neque odit.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, eveniet earum iure atque consectetur sit, error enim eum quos magni perferendis dignissimos qui adipisci, accusantium ipsa quidem voluptatem sint? Molestias maiores odit dolor officiis quasi saepe delectus quos accusamus dignissimos libero? Molestias, laborum quasi? Nobis, id nostrum libero numquam natus expedita at maiores beatae deserunt sapiente magni accusamus, corrupti illo!"];

    let btn = document.querySelector("button");
    let search = document.querySelector("input");
    let output = document.getElementById("show-para");
   
    btn.addEventListener("click", () => {

        let searchValue = search.value;

        if ( searchValue == 0 || searchValue > 9) {

            let random = Math.floor(Math.random() * text.length);
            output.innerHTML = text[random];

        }else{

          let textPrint = text.slice(0,searchValue)
          let result = "";

          for (let i = 0; i < textPrint.length; i++) {
           result += `<p>${textPrint[i]}</p>`;
          }

          output.innerHTML = result;
          
        };

    });