import { TbError404 } from "react-icons/tb";
import { Link } from "react-router-dom";
function Error() {
    return ( <>
    <section class="middle">
				<div class="container">
				
					<div class="row justify-content-center">
						<div class="col-12 col-md-10 col-lg-8 col-xl-6 text-center">

							
							<div class="p-4 d-inline-flex align-items-center justify-content-center circle bg-light-danger text-danger mx-auto mb-4">
                            <TbError404 size={200}/>
                                </div>
							
							<h2 class="mb-2 ft-bold">404. Page not found.</h2>
						
							<p class="ft-regular fs-md mb-5">Sorry, we couldn't find the page you where looking for. We suggest that you return to home page.</p>
							<Link to={"/"}><a class="btn btn-md theme-bg rounded text-black hover-theme" >Go To Home Page</a>
                            </Link>
						</div>
					</div>
					
				</div>
			</section>
    </> );
}

export default Error;