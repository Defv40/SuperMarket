/* global VK */

const Footer = () =>{
    return(
        <footer>
            <h2>work</h2>
            <div id="vk_comments"></div>
            
            <script type="text/javascript">
                
                
               {/* VK.init({ apiId: 51709623, onlyWidgets: true }) */}
               { VK.Widgets.Comments("vk_comments", {limit: 10, attach: "*"}) }
                 
                
            </script>
        </footer>
    )
}

export default Footer;