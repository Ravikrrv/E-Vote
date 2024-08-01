import React from 'react';
import './Member.css'; // Import CSS for styling (create this file)

const Member = ({ department, member, image }) => {
    return (
        <div className="organizing-member-card">
            <div className='abhi'>
                <img src={image} alt={member} className="member-image" />
            </div>
            
            <h3 className='kuchbhi'>{department}</h3>
            <p  className='kuchbhi'>{member}</p>
        </div>
    );
};

export default Member;
