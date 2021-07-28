import { Link } from 'react-router-dom';
import { useAuthActions, useAuthUser } from 'use-eazy-auth';

export default function Menu() {
    const { user } = useAuthUser();
    const { logout } = useAuthActions();

    return (
        <div className="col-2">
        
            <div className="row mt-5">
                <div className="col-12 text-center">
                    <span className="title-user">Logged User:</span> <span className="user-name">@{user.username}</span>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-12">

                    <div className="card mt-4">

                        <h5 class="card-header text-info">Menu</h5>

                        <div className="card-body">

                            <div className="list-group">
                                <Link to="/contacts" className="list-group-item list-group-item-action">
                                Contacts
                                </Link>
                                <Link to="/companies" className="list-group-item list-group-item-action">
                                Companies
                                </Link>
                                <Link to="/users" className="list-group-item list-group-item-action">
                                Users
                                </Link>
                                <Link to="#" className="list-group-item list-group-item-action" onClick={logout}>
                                Logout
                                </Link>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        
        </div>
    );

}