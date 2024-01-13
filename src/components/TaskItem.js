import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckSquare, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';

function TaskItem({ task, onUpdate, onDelete }) {
  const [isEditing, setEditing] = useState(false);
  const [isChecked, setCheck] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(task.title);

  const handleToggleEdit = () => {
    setEditing(!isEditing);
  };

  const handleUpdate = () => {
    onUpdate({ title: updatedTitle });
    setEditing(false);
  };

  const handleCheck = () => {
    setCheck(!isChecked);
  }

  return (
    <div className="task">
      {isEditing ? (
        <>
          <span style={{paddingRight:'5px', paddingLeft:'5px'}}>
            {isChecked ? (
              <>
              <span style={{color: '#768d80', fontSize:'20px'}}>
                <FontAwesomeIcon icon={faCheckSquare}/>
              </span>
              </>
            ) : (
              <>
              <span style={{fontSize:'20px'}}>
                <FontAwesomeIcon icon={faSquare} />
              </span>
              </>
            )}
          </span>
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <button className="save-btn" onClick={handleUpdate}>
            <FontAwesomeIcon icon={faCheck} />
          </button>
        </>
      ) : (
        <>
          <span onClick={handleCheck} style={{cursor:'pointer', userSelect: 'none'}}>
              {isChecked ? (
                <>
                  <span style={{color: '#768d80'}}>
                    <span style={{paddingRight:'5px', paddingLeft:'5px', fontSize:'20px'}}>
                      <FontAwesomeIcon icon={faCheckSquare} />
                    </span>
                    {task.title}
                  </span>
                </>
              ) : (
                <>
                  <span>
                    <span style={{paddingRight:'5px', paddingLeft:'5px', fontSize:'20px'}}>
                      <FontAwesomeIcon icon={faSquare} />
                    </span>
                    {task.title}
                  </span>
                </>
              )}
          </span>
          <div className="task-buttons">
            <button className="edit-btn" onClick={handleToggleEdit}>
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button className="delete-btn" onClick={onDelete}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TaskItem;
